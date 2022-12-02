import React from "react";
import Navbar from "../../../components/layout/navbar";
import Sidebar from "../../../components/layout/sidebar";
import Items from "../../../components/member-itemslist";
import SettingTabs from "../../../components/settingtabs";
import TextField from "../../../components/textfield";
import Pagination from "../../../components/pagination";

import style from "./members.module.scss";
import { useState } from "react";

const Members = () => {
  const [pageSize, setPageSize] = useState(10);
  const [totalCount] = useState();
  const [page, setPage] = useState(1);

  return (
    <div className={style.container}>
      <div className={style.display}>
        <Sidebar />
        <div className={style.data}>
          <Navbar title="SETTINGS" />
          <SettingTabs
            title1="MY SETTING"
            title2="MEMBERS"
            title3="WORKSPACE"
            title4="PROJECT"
          />
          <TextField />
          <Items />
          <div className={style.pagination}>
            <Pagination
              setCount={setPageSize}
              count={pageSize}
              totalCount={totalCount}
              setPage={setPage}
              page={page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;

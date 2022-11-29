import React from "react";
import Image from "../../../../components/image";
import Navbar from "../../../../components/layout/navbar";
import Sidebar from "../../../../components/layout/sidebar";
import SettingTabs from "../../../../components/settingtabs";
import NewWorkspace from "../../../../components/new workspace";
import Button from "../../../../components/button";

import img from "../../../../assets/Ellipse 10.svg";
import img1 from "../../../../assets/add-photo.png";
import style from "./detailpage.module.scss";

const Detailpage = () => {
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
          <div className={style.input}>
            <div>
              <NewWorkspace />
            </div>
            <div className={style.image}>
              <Image title="add or change logo" img={img} />
              <img className={style.img} src={img1} alt="" />
            </div>
          </div>
          <div className={style.button}>
            <div className={style.btn}>
              <Button title="BACK" />
              <Button title="SAVE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;

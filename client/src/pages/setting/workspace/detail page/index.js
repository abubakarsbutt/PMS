import React from "react";
import Image from "../../../../components/image";
import Button from "../../../../components/button";
import Navbar from "../../../../components/layout/navbar";
import Sidebar from "../../../../components/layout/sidebar";
import SettingTabs from "../../../../components/settingtabs";
import NewWorkspace from "../../../../components/new workspace";

import style from "./detailpage.module.scss";
import img from "../../../../assets/Ellipse 10.svg";
import img1 from "../../../../assets/add-photo.png";

import { useForm } from "react-hook-form";
import { createWorkspace } from "../../../../api-services/workspace";
import { Link } from "react-router-dom";

const Detailpage = () => {
  const { register, handleSubmit } = useForm({});

  const onSave = (data, setWorkspace) => {
    createWorkspace({ data, setWorkspace });
  };

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
          <form onSubmit={handleSubmit(onSave)}>
            <div className={style.input}>
              <div>
                <NewWorkspace register={register} />
              </div>
              <div className={style.image}>
                <Image title="add or change logo" img={img} />
                <img className={style.img} src={img1} alt="" />
              </div>
            </div>
            <div className={style.button}>
              <div className={style.btn}>
                <Link to="/workspace">
                  <Button title="BACK" />
                </Link>
                <Button title="SAVE" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;

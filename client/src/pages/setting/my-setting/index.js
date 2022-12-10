import React, { useEffect, useState } from "react";
import Image from "../../../components/image";
import Navbar from "../../../components/layout/navbar";
import Sidebar from "../../../components/layout/sidebar";
import SettingTabs from "../../../components/settingtabs";
// import Textarea from "../../../components/textarea/index";
import Button from "../../../components/button/index";

import img from "../../../assets/Ellipse 6.svg";
import img1 from "../../../assets/add-photo.png";
import style from "./mysetting.module.scss";
import { getUser, updateUser } from "../../../api-services/auth";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Input from "../../../components/input";

const MySetting = () => {
  const [user, setUser] = useState("");
  const { register, handleSubmit, reset } = useForm({});

  const dispatch = useDispatch();

  useEffect(() => {
    getUser({ setUser, reset, dispatch });
  }, []);

  const onSave = (data, setUser) => {
    updateUser({ data, setUser });
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
            // title5="LOGIN"
          />
          <form onSubmit={handleSubmit(onSave)}>
            <div className={style.input}>
              <div>
                <Input
                  name="newUsername"
                  label="USERNAME"
                  register={register}
                  containerClass={style.inputContainer}
                />
                <Input
                  label="EMAIL"
                  type="email"
                  name="newEmail"
                  disabled={true}
                  register={register}
                  containerClass={style.inputContainer}
                />
                <Input
                  label="NEW PASSWORD"
                  type="password"
                  name="newPassword"
                  register={register}
                  containerClass={style.inputContainer}
                />
                <Input
                  label="CONFIRM PASSWORD"
                  type="password"
                  name="confirmPassword"
                  register={register}
                  containerClass={style.inputContainer}
                />
              </div>
              <div className={style.image}>
                <Image title="Change Picture" img={img} />
                <img
                  className={style.img}
                  src={img1}
                  alt=""
                  {...(register && register("newImage"))}
                />
              </div>
            </div>
            <div className={style.btn}>
              <Button type="submit" title="SAVE" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MySetting;

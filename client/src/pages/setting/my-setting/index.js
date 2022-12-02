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

const MySetting = () => {
  const [user, setUser] = useState("");
  const { register, handleSubmit, reset } = useForm({});
  const [search] = useSearchParams();

  useEffect(() => {
    const token = search.get("token");
    getUser({ setUser, token, reset });
  }, []);
  console.log(user);

  const onSave = (data, setUser) => {
    console.log(data);
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
          />
          <form onSubmit={handleSubmit(onSave)}>
            <div className={style.input}>
              <div className="inputs">
                <label>
                  USERNAME
                  <input
                    type="text"
                    name="username"
                    {...(register && register("newUsername"))}
                  />
                </label>
                <label>
                  EMAIL
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    {...(register && register("newEmail"))}
                  />
                </label>
                <label>
                  NEW PASSWORD
                  <input
                    type="password"
                    name="password"
                    {...(register && register("newPassword"))}
                  />
                </label>
                <label>
                  CONFIRM PASSWORD
                  <input
                    type="password"
                    name="password"
                    {...(register && register(" newPassword"))}
                  />
                </label>
              </div>

              {/* <div>
                {inputData.map(({ lable }) => (
                  <Textarea lable={lable} />
                ))}
              </div> */}
              <div className={style.image}>
                <Image title="Change Picture" img={img} />
                <img className={style.img} src={img1} alt="" />
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

// const inputData = [
//   { lable: "USER NAME" },
//   { lable: "EMAIL" },
//   { lable: "NEW PASSWORD" },
//   { lable: "CONFIRM PASSWORD" },
// ];

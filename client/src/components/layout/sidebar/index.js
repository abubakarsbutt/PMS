import React from "react";
import style from "./sidebar.module.scss";

import img from "../../../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../store";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      <div>
        <div className={style.logo}>
          <img src={img} alt="" />
        </div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/projectname">Project Name</Link>
          <Link to="/setting">Settings </Link>
        </ul>
      </div>
      <div className={style.logOut}>
        <Link to="/login">
          <div
            onClick={() => {
              dispatch(setLogout());
            }}
          >
            Log Out
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

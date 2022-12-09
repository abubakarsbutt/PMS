import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { inviteUser, getByNameOrEmail } from "../../api-services/auth";
import style from "./textField.module.scss";
import img from "../../assets/icons8-search.svg";

const TextField = () => {
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data, setUser) => {
    // console.log(data);
    inviteUser({ data, setUser });
  };
  // const handleChange = (data, setUser) => {
  //   // console.log(data);
  //   getByNameOrEmail({ data, setUser });
  // };

  return (
    <div className={style.container}>
      <div className={style.left}>
        <img className={style.img} src={img} alt="" />
        {/* <form> */}
        <input
          // onChange={handleChange}
          className={style.input}
          type={
            "email"
              ? { ...(register && register("email")) }
              : "name" && { ...(register && register("username")) }
          }
          placeholder="Search by name or email"
          size={60}
        />
        {/* </form> */}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.right}>
          <input
            className={style.input}
            type="text"
            placeholder="Invite by email (multiple lines and CSV accepted)"
            size={55}
            {...(register && register("newEmail"))}
          />
          <select
            {...(register && register("newRole"))}
            className={style.select}
            id="Select"
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>

          <button type="submit" className={style.btn}>
            Invite
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextField;

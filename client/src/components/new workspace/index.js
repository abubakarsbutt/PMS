import React from "react";
import Textarea from "../textarea";

import style from "./newworkspace.module.scss";

const newWorkspace = ({ register }) => {
  return (
    <div className={style.container}>
      <Textarea
        register={register}
        type="text"
        label="WORK SPACE NAME"
        name="name"
      />
      <div className={style.display}>
        <label className={style.label} htmlFor="">
          NO. OF MEMBERS
        </label>

        <label className={style.label1}>FONT</label>
        <input
          type="text"
          name="font"
          className={style.input1}
          {...(register && register("font"))}
        />
      </div>

      <div className={style.color}>
        <label className={style.label2} htmlFor="">
          SELECT THEME COLOR
        </label>

        <label className={style.label3} htmlFor="">
          PRIMARY COLOR
        </label>
        <div>
          <input
            className={style.white}
            type="color"
            id="primary"
            name="primaryColor"
            // value=""
            {...(register && register("primaryColor"))}
          />
        </div>
        <label className={style.label3} htmlFor="">
          SECONDARY COLOR
        </label>
        <div>
          <input
            className={style.white}
            type="color"
            id="secondary"
            name="secondaryColor"
            value="#f6b73c"
            {...(register && register("secondaryColor"))}
          />
        </div>
      </div>
      <Textarea
        register={register}
        type="text"
        label="SELECT TIME ZONE"
        name="timeZone"
      />
      {/* <Textarea lable="SELECT TIME ZONE" /> */}
      <div className={style.invite}>
        <label className={style.label4} htmlFor="">
          INVITE PEOPLE
        </label>
        <textarea
          name="members"
          id="members"
          cols="56"
          rows="12"
          placeholder="ADD MULTIPLE TOGETHER WITH EMAIL"
          {...(register && register("members"))}
        />
      </div>
    </div>
  );
};

export default newWorkspace;

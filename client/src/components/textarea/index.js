import React from "react";
import style from "./textarea.module.scss";

const Textarea = (props) => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <label className={style.label} htmlFor="">
          {props.lable}
        </label>
      </div>
      <input className={style.input} type="name" name="email" />
    </div>
  );
};

export default Textarea;

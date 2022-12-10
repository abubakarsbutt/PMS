import React from "react";
import style from "./textarea.module.scss";

const Textarea = ({ register, label, name, type }) => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <label className={style.label} htmlFor="">
          {label}
        </label>
      </div>
      <input
        className={style.input}
        type={type}
        name={name}
        {...(register && register(name))}
      />
    </div>
  );
};

export default Textarea;

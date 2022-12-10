import React from "react";

import style from "./button.module.scss";

const Button = ({ title, type }) => {
  return (
    <div>
      <button {...(type && { type })} className={style.btn1}>
        {title}
      </button>
    </div>
  );
};

export default Button;

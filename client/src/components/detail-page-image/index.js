import React from "react";
import { Link } from "react-router-dom";

import style from "./image.module.scss";

const DetailImage = (props) => {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <Link to="/detailpage">
          <img src={props.img} alt="" />
        </Link>
      </div>
      <p className={style.para}>{props.title}</p>
    </div>
  );
};

export default DetailImage;

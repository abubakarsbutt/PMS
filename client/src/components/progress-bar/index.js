import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = () => {
  const percentage = 0;
  return (
    <>
      <CircularProgressbar
        value={1}
        text={`${percentage}%`}
        styles={buildStyles({
          height: 50,
          textSize: "16px",
          pathTransitionDuration: 0.5,
          pathColor: "#48d381",
          textColor: "#000000",
          trailColor: "#E9EBF0",
          backgroundColor: "#ffffff",
        })}
      />
    </>
  );
};

export default ProgressBar;

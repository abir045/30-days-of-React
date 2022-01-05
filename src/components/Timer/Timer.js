import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";
import { BsFillStopCircleFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

const Timer = () => {
  const percentage = 66;
  return (
    <div>
      <div>
        <FiSettings size={"6em"} style={{ display: "flex" }} />
      </div>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          path: {
            stroke: `red`,
          },
          text: {
            fill: "#fff",
          },
          trail: {
            stroke: `rgaba(255,255,255,0.2)`,
          },
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div>
          <AiFillPlayCircle size={"6em"} />
        </div>
        <div>
          <AiFillPauseCircle size={"6em"} />
        </div>
        <div>
          <BsFillStopCircleFill size={"5.5em"} />
        </div>
      </div>
    </div>
  );
};

export default Timer;

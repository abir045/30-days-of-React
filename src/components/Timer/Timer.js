import React, { useContext, useState, useEffect, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AiFillPlayCircle, AiTwotoneAccountBook } from "react-icons/ai";
import { AiFillPauseCircle } from "react-icons/ai";
import { BsFillStopCircleFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import SettingsContext from "../settingsContext/SettingsContext";

const Timer = () => {
  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";

      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;
      setSecondsLeft(nextSeconds);

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);

  let seconds = secondsLeft % 60;

  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div>
      <div>
        <FiSettings
          size={"6em"}
          style={{ display: "flex" }}
          onClick={() => settingsInfo.setShowSettings(true)}
        />
      </div>
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={{
          path: {
            stroke: mode === "work" ? "#f54242" : "#0f7320",
          },
          text: {
            fill: "#fff",
          },
          tail: {
            stroke: `rgaba(255,255,255,0.5)`,
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
        {isPaused ? (
          <AiFillPlayCircle
            size={"6em"}
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <AiFillPauseCircle
            size={"6em"}
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
        <div>
          <BsFillStopCircleFill size={"5.5em"} />
        </div>
      </div>
    </div>
  );
};

export default Timer;

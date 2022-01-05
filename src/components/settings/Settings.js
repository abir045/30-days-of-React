import React, { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "../settingsContext/SettingsContext";
import "./slider.css";

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);

  return (
    <div style={{ textAlign: "left" }}>
      <label>Work minutes : {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className={"slider"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        min={1}
        max={120}
      />

      <label>Break minutes : {settingsInfo.breakMinutes}:00</label>

      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        min={1}
        max={120}
      />
    </div>
  );
};

export default Settings;

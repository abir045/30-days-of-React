import React, { useContext } from "react";
import ReactSlider from "react-slider";
import SettingsContext from "../settingsContext/SettingsContext";
import "./slider.css";
import { BiArrowBack } from "react-icons/bi";

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
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />

      <label>Break minutes : {settingsInfo.breakMinutes}:00</label>

      <ReactSlider
        className={"slider green"}
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BiArrowBack
          className={"with-text"}
          size={"6em"}
          onClick={() => settingsInfo.setShowSettings(false)}
        />
      </div>
    </div>
  );
};

export default Settings;

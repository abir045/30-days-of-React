import "./App.css";
import Settings from "./components/settings/Settings";
import Timer from "./components/Timer/Timer";
import { useState } from "react";
import SettingsContext from "./components/settingsContext/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState({ initialState: false });
  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes: 50,
          breakMinutes: 15,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;

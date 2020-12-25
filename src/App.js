import React from "react";
import "./App.css";
import Commands from "./components/Commands";
import Dictate from "./components/Dictate";

const App = () => {
  return (
    <div>
      <Dictate />
      <Commands />
    </div>
  );
};

export default App;

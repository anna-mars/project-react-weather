import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stalowa Wola" />
        <footer>
          This project was coded by Anna Frac and is open-sourced on {""}
          <a
            href="https://github.com/anna-mars/project-react-weather"
            target="-blank"
            className="open-source"
          >
            GITHUB
          </a>
        </footer>
      </div>
    </div>
  );
}

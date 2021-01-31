import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stalowa Wola" />
        <footer>
          This project was coded by Anna Frac and is {""}
          <a
            href="https://github.com/anna-mars/project-react-weather"
            target="-blank"
          >
            open-sourced on GITHUB
          </a>
        </footer>
      </div>
    </div>
  );
}

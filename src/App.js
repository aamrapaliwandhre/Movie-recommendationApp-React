import React, { useState } from "react";
import "./styles.css";

const buttonList = ["horror", "comedy", "drama", "action"];

const toolsBucket = {
  horror: {
    tools: ["tumbbad", "pari", "bulbbul", "stree"],
    ratings: ["5/5", "4.5/5", "4/5", "3.5/5"]
  },

  comedy: {
    tools: ["Hera Pheri", "Phir hera pheri", "Maalamal Weekly", "Welcome"],
    ratings: ["5/5", "4.5/5", "4/5", "3.5/5"]
  },

  drama: {
    tools: ["Mukkabaaz", "Shor in the city", "D-Day", "Article 15"],
    ratings: ["5/5", "4.5/5", "4/5", "4/5"]
  },

  action: {
    tools: ["Mumbai saaga", "Tanhaji", "War", "Baaghi-3"],
    ratings: ["5/5", "4.5/5", "4/5"]
  }
};

export default function App() {
  const [toolName, setToolName] = useState("comedy");

  return (
    <div className="App">
      <div className="header">
        Movies
        <p>some recommended movies</p>
      </div>

      <main>
        <div className="leftPanel">
          <p>Click to get started</p>

          {buttonList.map((item, index) => {
            return (
              <button
                className="leftPanelButton"
                key={index}
                onClick={() => setToolName(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="rightPanel">
          <p>Recommendations: </p>
          <ul>
            {toolsBucket[toolName].tools.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <span> {toolsBucket[toolName].ratings[index]} </span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

import React from "react";
import "./App.css";
import data from "./data/data";

// import Container from "./components/Container";

function App() {
  return (
    <div className="blue-container">
      <h1 className="heading">High Scores per Country</h1>
      <div>
        {data.map((obj, index) => (
          <div key={index} className="green-container">
            <h2 className="heading">HIGH SCORES: {obj.name}</h2>
            <div className="scores">
              {obj.scores.map((score, index) => (
                <div className="score" key={index}>
                  <span className="score-n">{score.n.toUpperCase()}</span>
                  <span className="score-s">{score.s.toString()}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

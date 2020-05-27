import React from "react";
import "./App.css";
import data from "./data/data";

// import Container from "./components/Container";

function App() {
  return (
    <div className="blue-container">
      <h1 className="heading">High Scores per Country</h1>
      <div>
        {data
          .sort((a, b) =>
            a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
          )
          .map((obj, index) => (
            <div key={index} className="green-container">
              <h2 className="heading">HIGH SCORES: {obj.name}</h2>
              <div className="scores">
                {obj.scores
                  .sort((scoreA, scoreB) =>
                    Number(scoreA.s) < Number(scoreB.s) ? 1 : -1
                  )
                  .map((score, index) => (
                    <div className="score" key={index}>
                      <span className="score-n">{score.n.toUpperCase()}</span>
                      <span className="score-s">{Number(score.s)}</span>
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

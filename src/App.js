import React, { fragment, useState } from "react";
import "./App.css";
import data from "./data/data";

function App() {
  const [sortAscendingly, setSortAscendingly] = useState(true);

  const handleSort = () => {
    setSortAscendingly(!sortAscendingly);
  };

  let sortScores = (obj) => {
    return sortAscendingly
      ? obj.scores.sort((scoreA, scoreB) =>
          Number(scoreA.s) < Number(scoreB.s) ? 1 : -1
        )
      : obj.scores.sort((scoreA, scoreB) =>
          Number(scoreA.s) > Number(scoreB.s) ? 1 : -1
        );
  };

  return (
    <fragment>
      <div className="sorting-button">
        <button onClick={handleSort}>Sort Ascending/Descending</button>
      </div>
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
                  {sortScores(obj).map((score, index) => (
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
    </fragment>
  );
}

export default App;

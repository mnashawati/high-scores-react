import React from "react";
import data from "../data/data";

function Container() {
  return (
    <div className="blue-container">
      <h1>High scores per country</h1>
      <div className="green-container">
        <div className="country">
          {data.map((obj, index) => (
            <div key={index}>
              <h2>High scores: {obj.name}</h2>
              <div className="scores">
                {obj.scores.map((score, index) => (
                  <div className="score" key={index}>
                    <span>{score.n}</span>
                    <span>{score.s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;

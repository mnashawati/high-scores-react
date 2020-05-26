import React from "react";
import data from "../data/data";

function Container() {
  return (
    <div>
      <h1>High scores per country</h1>
      <div className="green-container">
        <div className="country">
          {data.map((obj) => (
            <>
              <h2>High scores: {obj.name}</h2>
              <div className="scores">
                {obj.scores.map((score, index) => (
                  <div className="score" key={index}>
                    <span>{score.n}</span>
                    <span>{score.s}</span>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container;

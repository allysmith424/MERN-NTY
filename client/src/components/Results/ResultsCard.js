import React from "react";
import "./ResultsCard.css";

export const ResultsCard = ({ children }) => {
  return (
    <div className="demo-card-wide mdl-card mdl-shadow--2dp results-card">
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">Results</h2>
      </div>
      <div className="mdl-card__supporting-text">
        <ul className="demo-list-item mdl-list">
          {children}
        </ul>
      </div>
    </div>
  )
};

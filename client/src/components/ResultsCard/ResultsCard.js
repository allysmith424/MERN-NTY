import React from "react";
import "./ResultsCard.css";

const ResultsCard = props => (
  <div className="demo-card-wide mdl-card mdl-shadow--2dp results-card">
    <div className="mdl-card__title">
      <h2 className="mdl-card__title-text">Results</h2>
    </div>
    <div className="mdl-card__supporting-text">
      <ul className="demo-list-item mdl-list">
        <li className="mdl-list__item">
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" id="list-item-1">
            <i className="material-icons">add</i>
          </button>
          <div className="mdl-tooltip" data-mdl-for="list-item-1">
          Save article
          </div>
          <span className="mdl-list__item-primary-content">
            Article Title 1 can go here
          </span>
        </li>
        <li className="mdl-list__item">
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" id="list-item-2">
            <i className="material-icons">add</i>
          </button>
          <div className="mdl-tooltip" data-mdl-for="list-item-2">
          Save article
          </div>
          <span className="mdl-list__item-primary-content">
            Article Title 2 can go here
          </span>
        </li>
        <li className="mdl-list__item">
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" id="list-item-3">
            <i className="material-icons">add</i>
          </button>
          <div className="mdl-tooltip" data-mdl-for="list-item-3">
          Save article
          </div>
          <span className="mdl-list__item-primary-content">
            Article Title 3 can go here
          </span>
        </li>
      </ul>
    </div>
  </div>
);

export default ResultsCard;

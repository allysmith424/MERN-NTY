import React from "react";
import "./SearchCard.css";

const SearchCard = props => (
  <div className="demo-card-wide mdl-card mdl-shadow--2dp search-card">
    <div className="mdl-card__title">
      <h2 className="mdl-card__title-text">Search</h2>
    </div>
    <div className="mdl-card__supporting-text">
      <form action="#">
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" id="topic" />
          <label className="mdl-textfield__label" for="topic">Topic</label>
        </div>
        <br />
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="start-year" />
          <label className="mdl-textfield__label" for="start-year">Start Year</label>
          <span className="mdl-textfield__error">Please give a year in the form YYYY</span>
        </div>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="end-year" />
          <label className="mdl-textfield__label" for="end-year">End Year</label>
          <span className="mdl-textfield__error">Please give a year in the form YYYY</span>
        </div>
      </form>
    </div>
    <div className="mdl-card__actions mdl-card--border">
      <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect search-btn">
        Search
      </a>
    </div>
  </div>
);

export default SearchCard;

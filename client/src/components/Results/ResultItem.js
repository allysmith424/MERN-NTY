import React from "react";

export const ResultItem = (props, index) =>
    <li className="mdl-list__item">
      <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" id={props.title}>
        <i className="material-icons">add</i>
      </button>
      <span className="mdl-list__item-primary-content">
        {props.title}
      </span>
    </li>

import React from "react";
import "./SavedCard.css";

const SavedCard = props => (
  <div class="demo-card-wide mdl-card mdl-shadow--2dp saved-card">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Saved articles</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <ul class="demo-list-item mdl-list">
        <li class="mdl-list__item">
          <div class="mdl-tooltip" data-mdl-for="list-item-1">
          Save article
          </div>
          <span class="mdl-list__item-primary-content">
            Article Title 1 can go here
          </span>
          <button class="mdl-button mdl-js-button mdl-button--primary remove-btn">
            Remove
          </button>
        </li>
        <li class="mdl-list__item">
          <div class="mdl-tooltip" data-mdl-for="list-item-2">
          Save article
          </div>
          <span class="mdl-list__item-primary-content">
            Article Title 2 can go here
          </span>
          <button class="mdl-button mdl-js-button mdl-button--primary remove-btn">
            Remove
          </button>
        </li>
        <li class="mdl-list__item">
          <div class="mdl-tooltip" data-mdl-for="list-item-3">
          Save article
          </div>
          <span class="mdl-list__item-primary-content">
            Article Title 3 can go here
          </span>
          <button class="mdl-button mdl-js-button mdl-button--primary remove-btn">
            Remove
          </button>
        </li>
      </ul>
    </div>
  </div>
);

export default SavedCard;

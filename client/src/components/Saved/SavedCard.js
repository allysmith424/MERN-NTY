import React from "react";
import "./SavedCard.css";

const SavedCard = ({ children }) => (
  <div class="demo-card-wide mdl-card mdl-shadow--2dp saved-card">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Saved articles</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <ul class="demo-list-item mdl-list">
        {children}
      </ul>
    </div>
  </div>
);

export default SavedCard;

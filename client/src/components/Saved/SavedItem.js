export const SavedItem = (props, index) =>

<li class="mdl-list__item">
  <div class="mdl-tooltip" data-mdl-for="list-item-1">
  Save article
  </div>
  <span class="mdl-list__item-primary-content">
    {props.title}
  </span>
  <button class="mdl-button mdl-js-button mdl-button--primary remove-btn">
    Remove
  </button>
</li>

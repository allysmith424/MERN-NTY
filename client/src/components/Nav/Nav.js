import React from "react";
import "./Nav.css";

const Nav = props => (
  <div class="demo-layout-transparent mdl-layout mdl-js-layout">
    <header class="mdl-layout__header mdl-layout__header--transparent">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">New York Times Search App</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="">Search</a>
          <a class="mdl-navigation__link" href="">Saved</a>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">NYT Search App</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Search</a>
        <a class="mdl-navigation__link" href="">Saved</a>
      </nav>
    </div>
    <main class="mdl-layout__content">
    </main>
  </div>
);

export default Nav;

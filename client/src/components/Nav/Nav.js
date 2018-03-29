import React from "react";
import "./Nav.css";

const Nav = props => (
  <div className="demo-layout-transparent mdl-layout mdl-js-layout">
    <header className="mdl-layout__header mdl-layout__header--transparent">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">New York Times Search App</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Search</a>
          <a className="mdl-navigation__link" href="">Saved</a>
        </nav>
      </div>
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">NYT Search App</span>
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">Search</a>
        <a className="mdl-navigation__link" href="">Saved</a>
      </nav>
    </div>
    <main className="mdl-layout__content">
    </main>
  </div>
);

export default Nav;

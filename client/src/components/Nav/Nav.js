import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
  <div className="demo-layout-transparent mdl-layout mdl-js-layout">
    <header className="mdl-layout__header mdl-layout__header--transparent">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">New York Times Search App</span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation">
          <Link to="/search" className="mdl-navigation__link">Search</Link>
          <Link to="/saved" className="mdl-navigation__link">Saved {props.saved > 0 ? (<span>({props.saved})</span>) : (<span></span>)}</Link>
        </nav>
      </div>
    </header>
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">NYT Search App</span>
      <nav className="mdl-navigation">
        <Link to="/search" className="mdl-navigation__link">Search</Link>
        <Link to="/saved" className="mdl-navigation__link">Saved {props.saved > 0 ? (<span>({props.saved})</span>) : (<span></span>)}</Link>
      </nav>
    </div>
    <main className="mdl-layout__content">
    </main>
  </div>
);

export default Nav;

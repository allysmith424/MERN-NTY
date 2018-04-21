import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import SavedCard from "../../components/Saved/SavedCard.js";
import SavedItem from "../../components/Saved/SavedItem.js";

class Saved extends Component {
  state = {
    title: "",
    date: "",
    href: ""
  };

  render() {
    return (
      <div>
        <SavedCard />
      </div>
    );
  };

};

export default Saved;

{/* <SavedItem
  title={item.title}
  date={item.date}
  href={item.href}
/> */}

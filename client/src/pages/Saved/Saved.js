import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import SavedCard from "../../components/SavedCard";

class Saved extends Component {
  state = {
    title: "",
    date: "",
    author: "",
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

import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { SavedCard, SavedItem } from "../../components/Saved";

class Saved extends Component {
  state = {
    title: "",
    date: "",
    href: ""
  };

  render() {
    return (
      <div>
        <SavedCard>
          <SavedItem
            title={item.title}
            date={item.date}
            href={item.href}
          />
        </SavedCard>
      </div>
    );
  };

};

export default Saved;

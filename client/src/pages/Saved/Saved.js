import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class Saved extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };
};

export default Saved;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Page from "./page";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Page />
  </Router>,
  document.getElementById("root")
);

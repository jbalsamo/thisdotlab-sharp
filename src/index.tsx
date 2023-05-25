/* @refresh reload */
import { Router } from "@solidjs/router";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "solid-js";
import { render } from "solid-js/web";
import App from "./App";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
);

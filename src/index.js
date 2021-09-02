import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { add, multiply, substract, divide } from "./calculater";

//Import the add, multiply, substract and divide functions
//from the calculator.js file.
// If successful, your website should look the same as the final.png

ReactDOM.render(
  <ul>
    <li> {add(1, 2)} </li>
    <li> {multiply(2, 3)} </li>
    <li> {substract(7, 2)} </li>
    <li> {divide(5, 2)} </li>
  </ul>,
  document.getElementById("root")
);

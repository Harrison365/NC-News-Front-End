import React from "react";
import ncLogo from "../NC.jpeg";
import "../App.css";

export default function Banner() {
  return (
    <div id="banner">
      <h1 id="NcTitle">NC News</h1>
      <img id="NcImage" src={ncLogo} />
    </div>
  );
}

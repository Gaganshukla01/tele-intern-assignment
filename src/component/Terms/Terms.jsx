// Terms.js

import React from "react";
import "./Terms.css";
import Background from "../../assets/geiranger.jpg";
import CardComponentTerms from "../CardcomponentTerms/cardComponentTerms";

const Terms = () => {
  return (
    <div className="term-container">
      <div className="text-container">
        <h2>Terms</h2>
        <div className="term-button">
          <button className="btn">Close and Go Back</button>
        </div>
        <CardComponentTerms />
        <div className="term-button2">
          <button className="btn">Close and Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default Terms;

import React from "react";
import Counter from "../Counter/Counter";
import Statistics from "../Statistics/Statistics";
import "./MiddleContent.css";

function MiddleContent() {
  return (
    <div className="middleContent">
      <div className="middleContent__content">
        <Counter />
        <Statistics />
      </div>
    </div>
  );
}

export default MiddleContent;

import React from "react";
import Counter from "../Counter/Counter";
import Statistics from "../Statistics/Statistics";
import "./MiddleContent.css";

function MiddleContent() {
  return (
    <div className="middleContent">
      <div className="middleContent__content desktop">
        <Counter />
        <Statistics />
      </div>

      <div className="middleContent__content mobile">
        <Statistics />
        <Counter />
      </div>
    </div>
  );
}

export default MiddleContent;

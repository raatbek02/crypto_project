import React from "react";
import "./ContentBlock.css";
import AppRoutes from "../AppRoutes";
import Header from "../Main/Header/Header";

function ContentBlock() {
  return (
    <div className="contentBlock">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default ContentBlock;

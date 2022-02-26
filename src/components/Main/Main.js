import React from "react";
import Categories from "./Categories/Categories";
import Header from "./Header/Header";
import "./Main.css";
import MiddleContent from "./MiddleContent/MiddleContent";
import Table from "./Table/Table";

function Main() {
  return (
    <div className="main">
      <div className="main__content">
        {/* <Header /> */}
        <Categories />
        <MiddleContent />
        <Table />
      </div>
    </div>
  );
}

export default Main;

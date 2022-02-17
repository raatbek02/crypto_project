import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes";

function AppRoutes() {
  return (
    <div style={{ width: "84%" }}>
      <Routes primary={false}>
        {publicRoutes.map(({ path, Component }) => (
          <Route primary={false} key={path} path={path} element={Component} />
        ))}
      </Routes>
    </div>
  );
}

export default AppRoutes;

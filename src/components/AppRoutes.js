import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

function AppRoutes() {
  const isAuth = useSelector((state) => state.isAuth.isAuth);

  return (
    <div>
      <Routes primary={false}>
        {isAuth &&
          privateRoutes.map(({ path, Component }) => (
            <Route primary={false} key={path} path={path} element={Component} />
          ))}

        {publicRoutes.map(({ path, Component }) => (
          <Route primary={false} key={path} path={path} element={Component} />
        ))}
      </Routes>
    </div>
  );
}

export default AppRoutes;

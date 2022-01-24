import React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes } from "../routes";

const AuthRoutes = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    });
  };

  return <Routes>{getRoutes(authRoutes)}</Routes>;
};

export default AuthRoutes;

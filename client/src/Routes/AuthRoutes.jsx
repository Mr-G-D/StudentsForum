import React from "react";
import { Route } from "react-router-dom";
import { authRoutes } from "../Routes";

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

  return <div>{getRoutes(authRoutes)}</div>;
};

export default AuthRoutes;

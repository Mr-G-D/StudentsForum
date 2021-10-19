import React from "react";
import { Route } from "react-router-dom";
import authRoutes from "../routes";

const AuthLayouts = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return <div>{getRoutes(authRoutes)}</div>;
};

export default AuthLayouts;

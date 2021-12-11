import React from "react";
import { Route } from "react-router-dom";
import authRoutes from "./Routes/AuthRoutes";
import DashboardRoutes from "./Routes/DashboardRoutes";

const Routes = () => {
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

  return (
    <div>
      {getRoutes(authRoutes)}
      {getRoutes(DashboardRoutes)}
    </div>
  );
};

export default Routes;

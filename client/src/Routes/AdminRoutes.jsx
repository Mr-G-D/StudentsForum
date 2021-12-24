import React from "react";
import { Route } from "react-router-dom";
import { adminRoutes } from "../Routes";

const AdminRoutes = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route exact path={prop.path} component={prop.component} key={key} />
      );
    });
  };

  return <div>{getRoutes(adminRoutes)}</div>;
};

export default AdminRoutes;

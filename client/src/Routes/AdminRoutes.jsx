import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import { adminRoutes } from "../routes";

const AdminRoutes = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route exact path={prop.path} component={prop.component} key={key} />
      );
    });
  };

  return <Routes>{useRoutes(adminRoutes)}</Routes>;
};

export default AdminRoutes;

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { routerConfig, routerConfigPrivate } from "../config/routeConfig";
import Loader from "shared/ui/Loader/Loader";

export const AppRoute = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRoute />}>
          {Object.values(routerConfigPrivate).map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
        {Object.values(routerConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

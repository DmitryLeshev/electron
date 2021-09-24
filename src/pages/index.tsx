import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Status } from "shared/types";

const LogIn = lazy(() => import("./login"));

export const Routing = ({ isAuth }: { isAuth: boolean; appStatus: Status }) => {
  return (
    <Switch>
      <Route exact path={"/home"} component={() => <h1>Home</h1>} />
      <Route exact path={"/login"} component={LogIn} />
      <Redirect to={isAuth ? "/home" : "/login"} />
    </Switch>
  );
};

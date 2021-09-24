import React from "react";

import { model } from "processes/check-status";
import { Routing } from "pages";
import { i18n } from "shared/lib";

import { withProviders } from "./providers";
import { Layout } from "./layouts";
import "./index.scss";

const App = () => {
  const isAuth = model.selectors.useIsAuth();
  const appStatus = model.selectors.useStatus();

  const props = { isAuth, appStatus };
  console.log("[App]", { isAuth, appStatus });

  return (
    <Layout {...props}>
      <Routing {...props} />
    </Layout>
  );
};

export default withProviders(App);

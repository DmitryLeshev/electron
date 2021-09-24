import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import { Link } from "react-router-dom";
import { Theme } from "shared/types";
import { paths } from "shared/config/paths";

export const SiteNavigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <Link className={classes.link} to={paths.home()}>
        Home
      </Link>
    </nav>
  );
};

export const SettingsNavigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <Link className={classes.link} to={paths.settings()}>
        Settings
      </Link>
    </nav>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: () => ({
      display: "flex",
      flexDirection: "column",
    }),
    link: {
      textDecoration: "none",
      color: theme.palette.getContrastText(theme.palette.background.paper),
    },
  })
);

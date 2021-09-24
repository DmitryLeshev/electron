import React from "react";
import { createStyles, makeStyles } from "@material-ui/core";
import clsx from "clsx";

import { model as modelCheckStatus } from "processes/check-status";
import { UI as UITopbar } from "widgets/top-bar";
import { UI as UILeftbar, model as modelLeftbar } from "widgets/left-bar";

import { Status, Theme } from "shared/types";
import { Atom } from "shared/ui";

export type Props = {
  children: React.ReactElement;
  isAuth: boolean;
  appStatus: Status;
};

export function Layout({ appStatus, isAuth, children }: Props) {
  const leftbar = modelLeftbar.selectors.useLeftbar();
  console.log("[Layout]", { isAuth, appStatus });

  const classes = useStyles();
  return (
    <>
      {isAuth && <UILeftbar.Navbar />}
      {appStatus ? (
        <main
          className={clsx(classes.main, {
            [classes.mainShift]: isAuth && leftbar === "OPEN",
            [classes.mainNotAuth]: !isAuth,
          })}
        >
          {children}
        </main>
      ) : (
        <div className={classes.wrapper}>
          <UITopbar.TopBar className={classes.topbar} />
          <Atom.CircularProgress />
        </div>
      )}
    </>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      overflow: "auto",
      width: `calc(100% - ${theme.drawer.closeWidth}px)`,
      marginLeft: theme.drawer.closeWidth,
      transition: theme.drawer.transition,
    },
    mainShift: {
      width: `calc(100% - ${theme.drawer.openWidth}px)`,
      marginLeft: theme.drawer.openWidth,
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginLeft: 0,
      },
    },
    mainNotAuth: {
      alignItems: "center",
      justifyContent: "center",
    },
    topbar: {},
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
    },
  })
);

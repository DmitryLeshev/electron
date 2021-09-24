import React, { ReactElement } from "react";
import { createStyles, makeStyles } from "@material-ui/core";

import { UI } from "features/logotype";
import { Theme } from "shared/types";
import clsx from "clsx";

interface Props {
  className: string;
}

export function TopBar({ className }: Props): ReactElement {
  const classes = useStyles();
  return (
    <header className={clsx(classes.topbar, className)}>
      <UI.Logotype />
    </header>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topbar: { display: "flex", margin: "0 auto" },
  })
);

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Mail from "@material-ui/icons/Mail";
import GetApp from "@material-ui/icons/GetApp";

const useStyles = makeStyles(theme => ({
  customHoverFocus: {
    "&:hover, &.Mui-focusVisible": { backgroundColor: "#607d8b" }
  }
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <div>
      <IconButton className={classes.customHoverFocus}>
        <Mail fontSize="large"/>
      </IconButton>
      <IconButton className={classes.customHoverFocus}>
        <GitHub fontSize="large"/>
      </IconButton>
      <IconButton className={classes.customHoverFocus}>
        <LinkedIn fontSize="large"/>
      </IconButton>
      <IconButton className={classes.customHoverFocus}>
        <GetApp fontSize="large"/>
      </IconButton>
    </div>
  );
}
import React from "react";
import styles from "./styles/PaletteFooterStyles";
import { withStyles } from "@mui/styles";

function PaletteFooter(props) {
  const { palleteName, emoji, classes } = props;
  return (
    <footer className={classes.PalleteFooter}>
      {palleteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);

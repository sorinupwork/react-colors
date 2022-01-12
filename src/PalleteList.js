import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { withStyles } from "@mui/styles";

class PalleteList extends Component {
  goToPalette(id) {
    console.log("HI");
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palletes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palletes.map((pallete) => (
              <MiniPalette
                {...pallete}
                handleClick={() => this.goToPalette(pallete.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PalleteList);

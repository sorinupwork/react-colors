import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { withStyles } from "@mui/styles";

class PalleteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palletes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to="palette/new">Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palletes.map((pallete) => (
              <MiniPalette
                {...pallete}
                handleClick={() => this.goToPalette(pallete.id)}
                handleDelete={deletePalette}
                key={pallete.id}
                id={pallete.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PalleteList);

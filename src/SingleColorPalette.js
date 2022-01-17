import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";

import styles from "./styles/PaletteStyles";

export default withStyles(styles)(
  class SingleColorPalette extends Component {
    constructor(props) {
      super(props);
      this._shades = this.gatherShades(this.props.pallete, this.props.colorId);
      this.state = { format: "hex" };
      this.changeFormat = this.changeFormat.bind(this);
    }

    gatherShades(pallete, colorToFilterBy) {
      let shades = [];
      let allColors = pallete.colors;

      for (let key in allColors) {
        shades = shades.concat(
          allColors[key].filter((color) => color.id === colorToFilterBy)
        );
      }
      return shades.slice(1);
    }

    changeFormat(value) {
      this.setState({ format: value });
    }
    render() {
      const { format } = this.state;
      const { palleteName, emoji, id } = this.props.pallete;
      const { classes } = this.props;
      const colorBoxes = this._shades.map((color) => (
        <ColorBox
          key={color.name}
          name={color.name}
          background={color[format]}
          showingFullPalette={false}
        />
      ));
      return (
        <div className={classes.Palette}>
          <Navbar handleChange={this.changeFormat} showingAllColors={false} />
          <div className={classes.colors}>
            {colorBoxes}
            <div className={classes.goBack}>
              <Link to={`/palette/${id}`}>GO BACK</Link>
            </div>
          </div>
          <PaletteFooter palleteName={palleteName} emoji={emoji} />
        </div>
      );
    }
  }
);

import React, { Component } from "react";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import styles from "./styles/PaletteStyles";
import { withStyles } from "@mui/styles";

export default withStyles(styles)(
  class Pallete extends Component {
    constructor(props) {
      super(props);
      this.state = { level: 500, format: "hex" };
      this.changeLevel = this.changeLevel.bind(this);
      this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
      this.setState({
        level,
      });
    }

    changeFormat(value) {
      this.setState({ format: value });
    }

    render() {
      const { colors, palleteName, emoji, id } = this.props.pallete;
      const { classes } = this.props;
      const { level, format } = this.state;
      const colorBoxes = colors[level].map((color) => (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          moreUrl={`/palette/${id}/${color.id}`}
          showingFullPalette
        />
      ));
      return (
        <div className={classes.Palette}>
          <Navbar
            level={level}
            changeLevel={this.changeLevel}
            handleChange={this.changeFormat}
            showingAllColors
          />
          <div className={classes.colors}> {colorBoxes} </div>
          <PaletteFooter palleteName={palleteName} emoji={emoji} />
        </div>
      );
    }
  }
);

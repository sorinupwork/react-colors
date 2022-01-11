import React, { Component } from "react";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import ColorBox from "./ColorBox";

export default class SingleColorPalette extends Component {
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
    const { palleteName, emoji } = this.props.pallete;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="Pallete">
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className="Pallete-colors">{colorBoxes}</div>
        <PaletteFooter palleteName={palleteName} emoji={emoji} />
      </div>
    );
  }
}

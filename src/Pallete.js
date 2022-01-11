import React, { Component } from "react";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import Navbar from "./Navbar";
import "./Pallete.css";

export default class Pallete extends Component {
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
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    ));
    return (
      <div className="Pallete">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className="Pallete-colors"> {colorBoxes} </div>
        const {(colors, palleteName, emoji, id)} = this.props.pallete;
        <PaletteFooter palleteName={palleteName} emoji={emoji} />
      </div>
    );
  }
}

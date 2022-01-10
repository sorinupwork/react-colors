import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

export default class PalleteList extends Component {
  render() {
    const { palletes } = this.props;
    return (
      <div>
        <MiniPalette />
        <h1>React Colors</h1>
        {palletes.map((pallete) => (
          <p>
            <Link to={`/palette/${pallete.id}`}>{pallete.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}

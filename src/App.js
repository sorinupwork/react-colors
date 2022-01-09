import React, { Component } from "react";
import Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePallete } from "./colorHelpers";

export default class App extends Component {
  render() {
    return (
      <div>
        <Pallete pallete={generatePallete(seedColors[3])} />
      </div>
    );
  }
}

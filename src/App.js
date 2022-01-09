import React, { Component } from "react";
import Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePallete } from "./colorHelpers";

export default class App extends Component {
  render() {
    console.log(generatePallete(seedColors[4]));
    return (
      <div>
        <Pallete {...seedColors[4]} />
      </div>
    );
  }
}

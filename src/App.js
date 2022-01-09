import React, { Component } from "react";
import Pallete from "./Pallete";
import seedColors from "./seedColors";

export default class App extends Component {
  render() {
    return (
      <div>
        <Pallete {...seedColors[4]} />
      </div>
    );
  }
}

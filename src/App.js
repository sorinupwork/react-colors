import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Pallete from "./Pallete";
import seedColors from "./seedColors";
import { generatePallete } from "./colorHelpers";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={() => <h1>Individual palette</h1>}
        />
      </Switch>

      // <div>
      //   <Pallete pallete={generatePallete(seedColors[3])} />
      // </div>
    );
  }
}

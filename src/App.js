import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Pallete from "./Pallete";
import PalleteList from "./PalleteList";
import seedColors from "./seedColors";
import { generatePallete } from "./colorHelpers";

export default class App extends Component {
  findPalette(id) {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PalleteList palletes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Pallete
              pallete={generatePallete(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>

      // <div>
      //   <Pallete pallete={generatePallete(seedColors[3])} />
      // </div>
    );
  }
}

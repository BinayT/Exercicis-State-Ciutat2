import React, { Component } from "react";
import { CIUTATS } from "./datos";
import Lista from "./components/Lista/Lista";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Lista items={CIUTATS} />
      </div>
    );
  }
}

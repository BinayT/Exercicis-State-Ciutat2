import React, { Component } from "react";

export default class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateUserInputSearch: "",
    };
    this.filterSearch = this.filterSearch.bind(this);
    this.renderCiutat = this.renderCiutat.bind(this);
  }

  //Handlers
  filterSearch(event) {
    this.setState({ stateUserInputSearch: event.target.value });
  }

  renderCiutat(stateUserInputSearch) {
    this.setState({ stateUserInputSearch });
  }

  render() {
    let listaCiutats = this.props.items
      .filter(
        (el) =>
          this.state.stateUserInputSearch === "" ||
          el.toLowerCase().includes(this.state.stateUserInputSearch)
      )
      .map((el) => (
        <li key={el} onClick={() => this.renderCiutat(el)}>
          {el}
        </li>
      ));
    return (
      <div>
        <h1>
          <center>CIUTATS</center>
        </h1>
        <input
          onChange={this.filterSearch}
          name="stateUserInputSearch"
          value={this.state.stateUserInputSearch}
        />
        <ul>{listaCiutats}</ul>
      </div>
    );
  }
}

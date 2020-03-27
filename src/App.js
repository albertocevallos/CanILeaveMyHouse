import React, { Component } from "react";
import "./styles/main.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route
          path={["/"]}
          exact
          render={() => {
            return <Home />;
          }}
        />
        <Route
          path="*"
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    );
  }
}

export default App;

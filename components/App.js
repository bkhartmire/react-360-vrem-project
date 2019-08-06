import React from "react";
import { Environment, asset } from "react-360";
import Select from "./Select";
import Room from "./Room";
// import GazeButton from "react-360-gaze-button";

export default class App extends React.Component {
  state = {
    environment: "360_world",
    home: true
  };

  changeEnvironment = (type, env) => {
    env === "360_world"
      ? this.setState({ environment: env, home: true })
      : this.setState({ environment: env, home: false });
    if (type === "photo") Environment.setBackgroundImage(asset(`${env}.jpg`));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.home ? (
          <Select
            changeEnv={(type, env) => this.changeEnvironment(type, env)}
          />
        ) : (
          <Room
            env={this.state.environment}
            changeEnv={(type, env) => this.changeEnvironment(type, env)}
          />
        )}
      </React.Fragment>
    );
  }
}

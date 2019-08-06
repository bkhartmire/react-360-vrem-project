import React from "react";
import { AppRegistry, Environment, asset } from "react-360";
import Select from "./Select";
// import GazeButton from "react-360-gaze-button";

export default class react_360_project extends React.Component {
  state = {
    title: "Select your phobia",
    environment: "360_world"
  };

  changeEnvironment = selection => {
    Environment.setBackgroundImage(asset(`${selection}.jpg`));
    this.setState({ title: selection });
  };

  render() {
    return (
      <React.Fragment>
        <Select changeEnv={env => this.changeEnvironment(env)} />
      </React.Fragment>
    );
  }
}

AppRegistry.registerComponent("react_360_project", () => react_360_project);

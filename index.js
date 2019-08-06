import React from "react";
import { AppRegistry } from "react-360";
import App from "./components/App";

export default class react_360_project extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent("react_360_project", () => react_360_project);

import React from "react";
import HomeLink from "./HomeLink";

export default class Room extends React.Component {
  render() {
    return (
      <HomeLink changeEnv={(type, env) => this.props.changeEnv(type, env)} />
    );
  }
}

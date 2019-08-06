import React from "react";
import HomeLink from "./HomeLink";
import Drive from "./Drive";
import Spiders from "./Spiders";
import Heights from "./Heights";
import PublicSpeaking from "./PublicSpeaking";

export default class Room extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HomeLink changeEnv={(type, env) => this.props.changeEnv(type, env)} />
        {this.props.env === "heights" && <Heights />}
        {this.props.env === "spiders" && <Spiders />}
        {this.props.env === "drive" && <Drive />}
        {this.props.env === "public_speaking" && <PublicSpeaking />}
      </React.Fragment>
    );
  }
}

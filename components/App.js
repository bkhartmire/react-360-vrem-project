import React from "react";
import { Environment, asset } from "react-360";
import Select from "./Select";
import Room from "./Room";
// import GazeButton from "react-360-gaze-button";

export default class App extends React.Component {
  state = {
    environment: "360_world",
    home: true,
    rooms: [
      { id: 1, name: "Home", fileName: "360_world.jpg" },
      { id: 2, name: "Heights", fileName: "heights.jpg" },
      { id: 3, name: "Spiders", fileName: "spiders.jpg" },
      { id: 4, name: "Drive", fileName: "drive.jpg" },
      { id: 5, name: "Public Speaking", fileName: "public_speaking.jpg" }
    ]
  };

  changeEnvironment = (type, room) => {
    room.name === "Home"
      ? this.setState({ environment: room.name, home: true })
      : this.setState({ environment: room.name, home: false });
    if (type === "photo") Environment.setBackgroundImage(asset(room.fileName));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.home ? (
          <Select
            changeEnv={(type, room) => this.changeEnvironment(type, room)}
            options={this.state.rooms.slice(1)}
          />
        ) : (
          <Room
            env={this.state.environment}
            changeEnv={(type, room) => this.changeEnvironment(type, room)}
          />
        )}
      </React.Fragment>
    );
  }
}

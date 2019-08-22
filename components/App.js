import React from "react";
import {
  Environment,
  NativeModules,
  asset,
  staticResourceURL
} from "react-360";
const { VideoModule } = NativeModules;
import Select from "./Select";
import Room from "./Room";
// import GazeButton from "react-360-gaze-button";

export default class App extends React.Component {
  state = {
    environment: "360_world",
    home: true,
    rooms: [
      { id: 1, name: "Home", type: "photo", fileName: "360_world.jpg" },
      { id: 2, name: "Heights", type: "video", fileName: "heights.mp4" },
      // { id: 3, name: "Spiders", type: "photo", fileName: "spiders.jpg" },
      { id: 4, name: "Drive", type: "video", fileName: "drive.mp4" },
      {
        id: 5,
        name: "Public Speaking",
        type: "video",
        fileName: "public_speaking.mp4"
      }
    ]
  };

  changeEnvironment = room => {
    room.name === "Home"
      ? this.setState({ environment: room.name, home: true })
      : this.setState({ environment: room.name, home: false });
    if (room.type === "photo") {
      Environment.setBackgroundImage(asset(room.fileName));
    } else if (room.type === "video") {
      VideoModule.createPlayer("myplayer");
      VideoModule.play("myplayer", {
        source: { url: "/static_assets/" + room.fileName },
        stereo: "2D"
      });
      Environment.setBackgroundVideo("myplayer");
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.home ? (
          <Select
            changeEnv={room => this.changeEnvironment(room)}
            options={this.state.rooms.slice(1)}
          />
        ) : (
          <Room
            env={this.state.environment}
            changeEnv={room => this.changeEnvironment(room)}
          />
        )}
      </React.Fragment>
    );
  }
}

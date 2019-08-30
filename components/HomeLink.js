import React from "react";
import { Text, View } from "react-360";
import { styles } from "../styles";
import GazeButton from "react-360-gaze-button";

export default class HomeLink extends React.Component {
  state = {
    gazed: false
  };

  setGazed = () => {
    this.setState({ gazed: true });
    this.props.changeEnv({
      name: "Home",
      type: "photo",
      fileName: "360_world.jpg"
    });
  };
  render() {
    return (
      <View style={styles.greetingBox}>
        <GazeButton
          duration={1000}
          onClick={() => this.setGazed()}
          render={(remainingTime, isGazed) => (
            <Text style={styles.greeting}>
              {isGazed ? remainingTime : "Home"}
            </Text>
          )}
        />
      </View>
    );
  }
}

import React from "react";
import { Text, View } from "react-360";
import { styles } from "../styles";
import GazeButton from "react-360-gaze-button";

export default class Option extends React.Component {
  state = {
    gazed: false
  };

  setGazed = () => {
    this.setState({ gazed: true });
    this.props.changeEnv(this.props.room);
  };

  render() {
    return (
      <GazeButton
        duration={1000}
        onClick={() => this.setGazed()}
        render={(remainingTime, isGazed) => (
          <View style={styles.greeting}>
            <Text style={styles.greeting}>
              {isGazed ? remainingTime : this.props.room.name}
            </Text>
          </View>
        )}
      />
    );
  }
}

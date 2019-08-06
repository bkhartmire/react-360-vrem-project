import React from "react";
import { Text, VrButton } from "react-360";
import { styles } from "../styles";

export default class Option extends React.Component {
  render() {
    return (
      <VrButton onClick={() => this.props.changeEnv("photo", this.props.room)}>
        <Text style={styles.greeting}>{this.props.room.name}</Text>
      </VrButton>
    );
  }
}

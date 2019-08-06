import React from "react";
import { Text, View } from "react-360";
import styles from "../styles";

export default class HomeLink extends React.Component {
  render() {
    return (
      <VrButton onClick={() => this.changeEnvironment("360_world")}>
        <Text style={styles.greeting}>Home</Text>
      </VrButton>
    );
  }
}

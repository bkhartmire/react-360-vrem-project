import React from "react";
import { Text, VrButton, View } from "react-360";
import { styles } from "../styles";

export default class HomeLink extends React.Component {
  render() {
    return (
      <View style={styles.greetingBox}>
        <VrButton onClick={() => this.props.changeEnv("photo", "360_world")}>
          <Text style={styles.greeting}>Home</Text>
        </VrButton>
      </View>
    );
  }
}

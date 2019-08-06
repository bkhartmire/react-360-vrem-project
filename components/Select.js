import React from "react";
import { Text, View } from "react-360";
import styles from "../styles";

export default class Select extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.greeting}>Select Your Enviroment</Text>
        <View style={styles.greetingBox}>
          <VrButton onClick={() => this.props.changeEnv("heights")}>
            <Text style={styles.greeting}>Heights</Text>
          </VrButton>
          <VrButton onClick={() => this.props.changeEnv("spiders")}>
            <Text style={styles.greeting}>Spiders</Text>
          </VrButton>
          <VrButton onClick={() => this.props.changeEnv("drive")}>
            <Text style={styles.greeting}>Drive</Text>
          </VrButton>
          <VrButton onClick={() => this.props.changeEnv("public speaking")}>
            <Text style={styles.greeting}>Public Speaking</Text>
          </VrButton>
        </View>
      </View>
    );
  }
}

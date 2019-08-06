import React from "react";
import { Text, View, VrButton } from "react-360";
import { styles } from "../styles";

export default class Select extends React.Component {
  render() {
    return (
      <div id="select">
        <View style={styles.panel}>
          <Text style={styles.greeting}>Select Your Enviroment</Text>
          <View style={styles.greetingBox}>
            <VrButton onClick={() => this.props.changeEnv("photo", "heights")}>
              <Text style={styles.greeting}>Heights</Text>
            </VrButton>
            <VrButton onClick={() => this.props.changeEnv("photo", "spiders")}>
              <Text style={styles.greeting}>Spiders</Text>
            </VrButton>
            <VrButton onClick={() => this.props.changeEnv("photo", "drive")}>
              <Text style={styles.greeting}>Drive</Text>
            </VrButton>
            <VrButton
              onClick={() => this.props.changeEnv("photo", "public speaking")}
            >
              <Text style={styles.greeting}>Public Speaking</Text>
            </VrButton>
          </View>
        </View>
      </div>
    );
  }
}

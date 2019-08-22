import React from "react";
import { Text, VrButton, View } from "react-360";
import { styles } from "../styles";

export default class HomeLink extends React.Component {
  render() {
    return (
      <View style={styles.greetingBox}>
        <VrButton
          onClick={() =>
            this.props.changeEnv({
              name: "Home",
              type: "photo",
              fileName: "360_world.jpg"
            })
          }
        >
          <Text style={styles.greeting}>Home</Text>
        </VrButton>
      </View>
    );
  }
}

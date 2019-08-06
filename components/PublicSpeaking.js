import React from "react";
import { Text, View } from "react-360";
import styles from "../styles";

export default class PublicSpeaking extends React.Component {
  render() {
    return (
      <div id="public_speaking">
        <View style={styles.panel}>
          <View style={styles.greeting}>
            <Text style={styles.greeting}>Public Speaking</Text>
          </View>
        </View>
      </div>
    );
  }
}

import React from "react";
import { Text, View } from "react-360";
import styles from "../styles";

export default class Heights extends React.Component {
  render() {
    return (
      <div id="heights">
        <View style={styles.panel}>
          <View style={styles.greeting}>
            <Text style={styles.greeting}>Heights</Text>
          </View>
        </View>
      </div>
    );
  }
}

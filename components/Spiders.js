import React from "react";
import { Text, View } from "react-360";
import styles from "../styles";

export default class Spiders extends React.Component {
  render() {
    return (
      <div id="spiders">
        <View style={styles.panel}>
          <View style={styles.greeting}>
            <Text style={styles.greeting}>Spiders</Text>
          </View>
        </View>
      </div>
    );
  }
}

import React from "react";
import { Text, View } from "react-360";
import { styles } from "../styles";
import Option from "./Option";

export default class Select extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.greeting}>Select Your Enviroment</Text>
        <View style={styles.greetingBox}>
          {this.props.options.map(option => {
            return (
              <Option
                key={option.id}
                room={option}
                changeEnv={room => this.props.changeEnv(room)}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

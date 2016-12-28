/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from "react-native";
interface Props {

}

interface State {

}

export default class Scribe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  getMessages() {
    let dataResponse;
    fetch("http://127.0.0.1:8000/messages", {
      method: "GET"
    })
    .then((response: any) => response.json())
    .then((responseData: any) => {
      this.setState({
        data: "restponse" + JSON.stringify(responseData)
      });
    });
    // return dataResponse;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu{"\n"}
          {this.getMessages()}
          {this.state.data}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  } as React.ViewStyle,
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  } as React.ViewStyle,
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  } as React.ViewStyle,
});

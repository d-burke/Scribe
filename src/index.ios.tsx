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
  View,
  TextInput,
  // MapView
} from "react-native";
import { MapView } from "react-native";
// import MapView from 'react-native-maps';
// const MapView = require("react-native-maps");
// let MapView = require('react-native-maps');

interface Props {

}

interface State {
  data: string;
}

export default class Scribe extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: "loading"
    };
    // this.state: State = {
    //   data: "loading"
    // };
  }

  componentWillMount() {
    this.getMessages();
  }

  getMessages() {
    fetch("http://127.0.0.1:8000/messages", {
      method: "GET"
    })
    .then((response: any) => response.json())
    .then((responseData: any) => {
      this.setState({
        data: JSON.stringify(responseData)
      });
    });
  }

  postMessage(text: string) {
    fetch("http://127.0.0.1:8000/messages", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      })
    })
    // .then((response: any) => response.json())
    .then((responseData: any) => {
      this.getMessages();
    });
  }

  sayStuff(stuff: string) {
    console.log("STUFF " + stuff);
  }

  render() {
    return (
      <View>

      <MapView
        style={{height: 200, margin: 40}}
        showsUserLocation={true}
         region={{
           latitude: 37.78825,
           longitude: -122.4324,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       </MapView>

        <TextInput  style={{height: 40, borderColor: "gray", borderWidth: 1}} onSubmitEditing={(text: any) => this.postMessage( text.nativeEvent.text  )}/>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu{"\n"}
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

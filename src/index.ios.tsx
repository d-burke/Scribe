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

}

export default class Scribe extends Component<Props, State> {
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
          Cmd+D or shake for dev menu
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

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Ride extends React.Component {
  render(){
    return(
      <View style={{flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0E6F0"}}>
      <Text style={{color: "#4C5D70",
    fontSize: 30}}>Ride Screen
      </Text>
      </View>
    )
  }
}
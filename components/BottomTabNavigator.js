import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Ride from '../Ride'
import RideHistory from '../RideHistory'

const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Ride" component={Ride}  />
          <Tab.Screen name="RideHistory" component={RideHistory}  />
        </Tab.Navigator>
      </NavigationContainer>



    )
  }
}
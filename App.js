import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FaceBookScreen from './screens/BookTransactionScreen';
import InstagramScreen from './screens/SearchScreen';

export default class App extends Component {
    render() {
      return (
        <View style={{flex:1}}>
          <Appcontainer/>
        </View>
      )
    }
  }
  
  const TabNavigator = createBottomTabNavigator({
    Transaction: {screen:FaceBookScreen},
    Search: {screen:InstagramScreen}
  })
  const Appcontainer = createAppContainer(TabNavigator)
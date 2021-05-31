//yay react is not the first
import React, { Component } from 'react';
import { createAppContainer} from 'react-navigation';
import { createBottonTabNavigator} from 'react-navigation-tabs';

import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/facebook'
import Instagram from './screens/instagram'




export default class App extends React.Component {
 render(){
  return (
  <AppContainer/>
  
        )
}}
const TabNavigator=createBottonTabNavigator({

facebook:{screen:Facebook},
instagram:{screen:Instagram}



})

const AppContainer=createAppContainer(TabNavigator)
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

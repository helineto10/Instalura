import React, { Fragment, useEffect, useState } from 'react';
import {  } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack'
import Feed from './src/Views/Feed/Feed'
import Login from './src/Views/Login/Login'
import { createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Login : {screen:Login},
  Feed : {screen:Feed}
})

const AppContainer = createAppContainer(navigator)

const App = () => {

  return (
    <AppContainer/>
  );
};

export default App;
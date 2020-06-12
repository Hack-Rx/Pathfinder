import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { YellowBox } from 'react-native'
import _ from 'lodash'

import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {AppLoading} from 'expo'
import {Font} from 'expo-font'
import Providers from './navigation'


const App = () => {

  const [fontLoaded, setFontLoaded ] = useState(false)


  YellowBox.ignoreWarnings(['Setting a timer']);
  const _console = _.clone(console);
  console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
      _console.warn(message);
    }
  };

  const loadAssetsAsync = async () => {
    await Font.loadAsync({
      Avenir: require('./assets/fonts/AvenirLTStd-Roman.otf'),
    })
    setFontLoaded(true);
  };

  return (

    <Providers />
  );
}



export default App;
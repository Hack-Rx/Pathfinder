import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { YellowBox } from 'react-native'
import _ from 'lodash'

import Providers from './navigation'

const App = () => {

  YellowBox.ignoreWarnings(['Setting a timer']);
  const _console = _.clone(console);
  console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
      _console.warn(message);
    }
  };


  return (
      <Providers />
  );
}


export default App;
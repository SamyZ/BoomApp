import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import mainStyles from './styles/main';
import Firebase from 'firebase';

const firebaseRef = new Firebase('https://reactnativestartapp.firebaseio.com'); // Ready to use

const BoomApp = () => (
  <View style={mainStyles.container} >
    <Text style={mainStyles.welcome}>
      Welcome to React Native!
    </Text>
    <Text style={mainStyles.instructions}>
      To get started edit js/index.js LOLZ
    </Text>
    <Text style={mainStyles.instructions}>
      Shake or press menu button for dev menu
    </Text>
  </View>
);

export default BoomApp;

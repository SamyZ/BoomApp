import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import mainStyles from '../../styles/mainStyles';
import loginStyles from '../../styles/login/loginStyles';

class newChallenge extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={loginStyles.mainContainer}>
        <View style={loginStyles.welcomeContainer}>
          <Text style={loginStyles.welcomeFont}>
            Sport
          </Text>
        </View>
      </View>
    );
  }
}

export default newChallenge;

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import mainStyles from '../../styles/mainStyles';
import loginStyles from '../../styles/login/loginStyles';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={loginStyles.mainContainer}>
        <View style={loginStyles.welcomeContainer}>
          <Text style={loginStyles.welcomeFont}>
            HOME VIEW
          </Text>
        </View>
      </View>
    );
  }
}

export default HomeView;

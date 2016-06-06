import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import mainStyles from '../../styles/main/mainStyles';
import loginStyles from '../../styles/login/loginStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../utils/Nav';

class ExerciseView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={loginStyles.mainContainer}>
        <View style={loginStyles.welcomeContainer}>
          <Text style={loginStyles.welcomeFont}>
            Exercise
          </Text>
          <Icon name="rocket" size={30} color={mainStyles.themeColors.primary} />
          <TouchableHighlight onPress={() => this.props.navigator.pop()}>
            <Text style={loginStyles.welcomeFont}>Go to sport</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default ExerciseView;

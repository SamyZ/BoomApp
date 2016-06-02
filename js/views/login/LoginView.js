import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';
import mainStyles from '../../styles/mainStyles';
import loginStyles from '../../styles/login/loginStyles';
import * as Auth from '../../utils/Auth';
import { navigate } from '../../utils/Nav';

const propTypes = {
  navigator: React.PropTypes.object,
};

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'choupi@test.com',
      password: '',
    };
  }

  signIn = () => {
    Auth.authUser(this.state.email, this.state.password)
      .then(() => navigate(this.props.navigator, 'home'))
      .catch(() => {}); // Display an error
  }

  signUp = () => {
    Auth.createUser(this.state.email, this.state.password);
  }

  render() {
    return (
      <View style={loginStyles.mainContainer}>
        <View style={loginStyles.welcomeContainer}>
          <Text style={loginStyles.welcomeFont}>
           Get ready to Boom yourself!
          </Text>
        </View>
        <View style={loginStyles.inputsContainer}>
          <View style={loginStyles.inputContainer}>
            <TextInput
              style={loginStyles.inputFont}
              placeholder="Username"
              placeholderTextColor={mainStyles.themeColors.main}
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              underlineColorAndroid={mainStyles.themeColors.main}
            />
          </View>
          <View style={loginStyles.inputContainer}>
            <TextInput
              password
              style={loginStyles.inputFont}
              placeholder="Password"
              placeholderTextColor={mainStyles.themeColors.main}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              underlineColorAndroid={mainStyles.themeColors.main}
            />
          </View>
          <View style={loginStyles.forgotContainer}>
            <Text style={loginStyles.passwordFont}>Forgot Password</Text>
          </View>
        </View>
        <TouchableHighlight style={loginStyles.signinContainer} onPress={this.signIn}>
          <Text style={loginStyles.signinFont}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight style={loginStyles.signupContainer} onPress={this.signUp}>
          <Text style={loginStyles.signupFont}>
            Don't have an account?
            <Text style={loginStyles.boldFont}>
            {'  Sign Up'}
            </Text>
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

LoginView.propTypes = propTypes;

export default LoginView;

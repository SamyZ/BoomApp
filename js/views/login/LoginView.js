import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';
import mainStyles from '../../styles/main/mainStyles';
import loginStyles from '../../styles/login/loginStyles';
import { authUser, createUser } from '../../utils/Auth';

const propTypes = {
  onSignIn: React.PropTypes.func,
  onSignUp: React.PropTypes.func,
};

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'choupi@test.com',
      password: '',
    };
  }

  onChangeEmail = (email) => {
    this.setState({ email });
  }

  onChangePassword = (password) => {
    this.setState({ password });
  }

  signIn = () => {
    authUser(this.state.email, this.state.password)
      .then((userData) => this.props.onSignIn(this.state.email, this.state.password, userData))
      .catch(() => {}); // Display an error
  }

  signUp = () => {
    createUser(this.state.email, this.state.password)
      .then((userData) => this.props.onSignUp(this.state.email, this.state.password, userData))
      .catch(() => {}); // Display an error
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
              placeholderTextColor={mainStyles.themeColors.primary}
              value={this.state.email}
              onChangeText={this.onChangeEmail}
              underlineColorAndroid={mainStyles.themeColors.primary}
            />
          </View>
          <View style={loginStyles.inputContainer}>
            <TextInput
              password
              style={loginStyles.inputFont}
              placeholder="Password"
              placeholderTextColor={mainStyles.themeColors.primary}
              value={this.state.password}
              onChangeText={this.onChangePassword}
              underlineColorAndroid={mainStyles.themeColors.primary}
            />
          </View>
          <View style={loginStyles.forgotContainer}>
            <Text style={loginStyles.passwordFont}>Forgot Password</Text>
          </View>
        </View>
        <TouchableHighlight
          style={loginStyles.signinContainer}
          onPress={this.signIn}
        >
          <Text style={loginStyles.signinFont}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={loginStyles.signupContainer}
          onPress={this.signUp}
        >
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

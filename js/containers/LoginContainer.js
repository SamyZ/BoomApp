import React from 'react';
import { connect } from 'react-redux';
import { onSignIn, onSignUp } from '../actions/userActions';
import LoginView from '../views/login/LoginView';

const propTypes = {
  navigator: React.PropTypes.object,
  onSignIn: React.PropTypes.func,
  onSignUp: React.PropTypes.func,
};

function mapStateToProps(state) {
  return state.user;
}

function mapDispatchToProps(dispatch) {
  return {
    onSignIn: (email, password, userData, navigator) => dispatch(onSignIn(email, password, userData, navigator)),
    onSignUp: (email, password, userData, navigator) => dispatch(onSignUp(email, password, userData, navigator)),
  };
}

class LoginContainer extends React.Component {
  onSignIn = (email, password, userData) => this.props.onSignIn(email, password, userData, this.props.navigator);
  onSignUp = (email, password, userData) => this.props.onSignUp(email, password, userData, this.props.navigator);
  render = () => <LoginView onSignIn={this.onSignIn} onSignUp={this.onSignUp} />
}

LoginContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

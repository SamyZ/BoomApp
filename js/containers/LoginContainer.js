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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSignIn: (email, password, userData) => dispatch(onSignIn(email, password, userData, ownProps.navigator)),
    onSignUp: (email, password, userData) => dispatch(onSignUp(email, password, userData, ownProps.navigator)),
  };
}

class LoginContainer extends React.Component {
  render = () => <LoginView onSignIn={this.props.onSignIn} onSignUp={this.props.onSignUp} />
}

LoginContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

import React from 'react';
import { connect } from 'react-redux';
import { Navigator } from 'react-native';
import { onSave, onCreate } from '../actions/challengesActions';
import SportView from '../views/newChallenge/SportView';
import ExerciseView from '../views/newChallenge/ExerciseView';
import FriendsView from '../views/newChallenge/FriendsView';
import PrizeView from '../views/newChallenge/PrizeView';
import SummaryView from '../views/newChallenge/SummaryView';
import NavBarView from '../views/newChallenge/NavBarView';

const propTypes = {
  navigator: React.PropTypes.object,
  onSave: React.PropTypes.func,
  onCreate: React.PropTypes.func,
};

const routeStack = [
  { name: 'Sport', index: 0 },
  { name: 'Exercise', index: 1 },
  { name: 'Friends', index: 2 },
  { name: 'Prize', index: 3 },
  { name: 'Summary', index: 4 },
];

function mapStateToProps(state) {
  return state.newChallenge;
}

function mapDispatchToProps(dispatch) {
  return {
    onSave: (challenge, navigator) => dispatch(onSave(challenge, navigator)),
    onCreate: (challenge, navigator) => dispatch(onCreate(challenge, navigator)),
  };
}

class NewChallengeContainer extends React.Component {
  onSave = (challenge, challengeNavigator) => this.props.onSave(challenge, challengeNavigator);
  onCreate = (challenge) => this.props.onCreate(challenge, this.props.navigator);

  configureScene = (/* route, routeStack */) => ({ ...Navigator.SceneConfigs.PushFromRight, gestures: {} })

  navigateBackward = (leaveChallengeCreation) => {
    if (leaveChallengeCreation) {
      this.props.navigator.pop();
    } else {
      this.challengeNavigator.jumpBack();
    }
  }

  navigateForward = (leaveChallengeCreation) => {
    if (leaveChallengeCreation) {
      this.props.navigator.pop();
    } else {
      this.challengeNavigator.jumpForward();
    }
  }

  renderScene = (route) => {
    switch (route.name) {
      default:
      case 'Sport':
        return (
          <SportView
            onSave={this.onSave}
          />);
      case 'Exercise':
        return (
          <ExerciseView
            onSave={this.onSave}
          />);
      case 'Friends':
        return (
          <FriendsView
          />);
      case 'Prize':
        return (
          <PrizeView
          />);
      case 'Summary':
        return (
          <SummaryView
          />);
    }
  }

  render = () => (
    <Navigator
      ref={(challengeNavigator) => { this.challengeNavigator = challengeNavigator; }}
      initialRoute={routeStack[0]}
      initialRouteStack={routeStack}
      renderScene={this.renderScene}
      configureScene={this.configureScene}
      navigationBar={
        <NavBarView
          routeStack={routeStack}
          navigateBackward={this.navigateBackward}
          navigateForward={this.navigateForward}
        />}
    />
  );
}

NewChallengeContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewChallengeContainer);

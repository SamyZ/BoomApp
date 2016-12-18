import React from 'react';
import { connect } from 'react-redux';
import { Navigator } from 'react-native';
import { createChallenge } from '../actions/challengesActions';
import SportView from '../views/newChallenge/SportView';
import ExerciseView from '../views/newChallenge/ExerciseView';
import FriendsView from '../views/newChallenge/FriendsView';
import PrizeView from '../views/newChallenge/PrizeView';
import SummaryView from '../views/newChallenge/SummaryView';
import NavBarView from '../views/newChallenge/NavBarView';

const propTypes = {
  navigator: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

const routeStack = [
  { name: 'Sport', index: 0 },
  { name: 'Exercise', index: 1 },
  { name: 'Friends', index: 2 },
  { name: 'Prize', index: 3 },
  { name: 'Summary', index: 4 },
];

class NewChallengeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: { value: '2', unit: 'weeks' },
      objective: {},
      repetition: 7,
    };
  }

  onChallengeUpdate = (challenge) => this.setState({ ...this.state, ...challenge });

  configureScene = (/* route, routeStack */) => ({ ...Navigator.SceneConfigs.PushFromRight, gestures: {} })

  navigateBackward = (leaveChallengeCreation) => {
    if (leaveChallengeCreation) {
      this.props.navigator.pop();
    } else {
      this.challengeNavigator.jumpBack();
      this.forceUpdate();
    }
  }

  navigateForward = (leaveChallengeCreation) => {
    if (leaveChallengeCreation) {
      this.props.dispatch(createChallenge(this.state));
      this.props.navigator.pop();
    } else {
      this.challengeNavigator.jumpForward();
      this.forceUpdate();
    }
  }

  renderScene = (route) => {
    switch (route.name) {
      default:
      case 'Sport':
        return (
          <SportView
            onChallengeUpdate={this.onChallengeUpdate}
          />);
      case 'Exercise':
        return (
          <ExerciseView
            onChallengeUpdate={this.onChallengeUpdate}
          />);
      case 'Friends':
        return (
          <FriendsView
            onChallengeUpdate={this.onChallengeUpdate}
          />);
      case 'Prize':
        return (
          <PrizeView
            onChallengeUpdate={this.onChallengeUpdate}
          />);
      case 'Summary':
        return (
          <SummaryView
            challenge={this.state}
            onSave={this.onSave}
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
          challenge={this.state}
        />}
    />
  );
}

NewChallengeContainer.propTypes = propTypes;

export default connect()(NewChallengeContainer);

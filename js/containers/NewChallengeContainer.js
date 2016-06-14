import React from 'react';
import { connect } from 'react-redux';
import { Navigator } from 'react-native';
import { onSave, onCreate } from '../actions/challengesActions';
import SportView from '../views/newChallenge/SportView';
import ExerciseView from '../views/newChallenge/ExerciseView';
import FriendsView from '../views/newChallenge/FriendsView';
import PrizeView from '../views/newChallenge/PrizeView';
import SummaryView from '../views/newChallenge/SummaryView';

const propTypes = {
  navigator: React.PropTypes.object,
  onSave: React.PropTypes.func,
  onCreate: React.PropTypes.func,
};

function mapStateToProps(state) {
  return state.newChallenge;
}

function mapDispatchToProps(dispatch) {
  return {
    onSave: (challenge, navigator) => dispatch(onSave(challenge, navigator)),
    onCreate: (challenge, navigator) => dispatch(onCreate(challenge, navigator)),
    dispatch,
  };
}

class NewChallengeContainer extends React.Component {
  onSave = (challenge, challengeNavigator) => this.props.onSave(challenge, challengeNavigator);
  onCreate = (challenge) => this.props.onCreate(challenge, this.props.navigator);

  configureScene = (/* route, routeStack */) => ({ ...Navigator.SceneConfigs.PushFromRight, gestures: {} })

  renderScene = (route, challengeNavigator) => {
    switch (route.name) {
      default:
      case 'sport':
        return (
          <SportView
            challengeNavigator={challengeNavigator}
            mainNavigator={this.props.navigator}
            onSave={this.onSave}
          />);
      case 'exercise':
        return (
          <ExerciseView
            challengeNavigator={challengeNavigator}
            onSave={this.onSave}
          />);
      case 'friends':
        return (
          <FriendsView
            challengeNavigator={challengeNavigator}
          />);
      case 'prize':
        return (
          <PrizeView
            challengeNavigator={challengeNavigator}
          />);
      case 'summary':
        return (
          <SummaryView
            challengeNavigator={challengeNavigator}
            mainNavigator={this.props.navigator}
          />);
    }
  }

  render = () => (
    <Navigator
      initialRoute={{ name: 'sport', index: 0 }}
      renderScene={this.renderScene}
      configureScene={this.configureScene}
    />
  );
}

NewChallengeContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewChallengeContainer);

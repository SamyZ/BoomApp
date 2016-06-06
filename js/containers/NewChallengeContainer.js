import React from 'react';
import { connect } from 'react-redux';
import { Navigator } from 'react-native';
import { onSave, onCreate } from '../actions/challengesActions';
import SportView from '../views/newChallenge/SportView';
import ExerciseView from '../views/newChallenge/ExerciseView';

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

  renderScene = (route, challengeNavigator) => {
    switch (route.name) {
      default:
      case 'sport':
        return <SportView navigator={challengeNavigator} />;
      case 'exercise':
        return <ExerciseView navigator={challengeNavigator} />;
    }
  }

  render = () => (
    <Navigator
      initialRoute={{ name: 'sport', index: 0 }}
      renderScene={this.renderScene}
      configureScene={(route, routeStack) => {
        console.log(route);
        console.log(routeStack);
        return { ...Navigator.SceneConfigs.PushFromRight, gestures: {} };
      }}
    />
  );
}

NewChallengeContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewChallengeContainer);

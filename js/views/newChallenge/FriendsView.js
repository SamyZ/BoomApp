import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { navigate } from '../../utils/Nav';
import newChallengeStyles from '../../styles/newChallenge/newChallengeStyles';
import NavBarView from './NavBarView';

const propTypes = {
  challengeNavigator: React.PropTypes.object,
  onSave: React.PropTypes.func,
};

class FriendsView extends React.Component {
  onSave = () => this.props.onSave({ duration: '15 min' })

  navigateBackward = () => navigate(this.props.challengeNavigator, 'exercise');

  navigateForward = () => navigate(this.props.challengeNavigator, 'prize');

  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <NavBarView
        backward="Excercise"
        forward="Prize"
        navigateBackward={this.navigateBackward}
        navigateForward={this.navigateForward}
        progress={0.6}
      />
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont}>Friends</Text>
      </View>
    </View>
  );
}

FriendsView.propTypes = propTypes;

export default FriendsView;

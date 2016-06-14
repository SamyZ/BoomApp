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
  mainNavigator: React.PropTypes.object,
  onSave: React.PropTypes.func,
};

class SummaryView extends React.Component {
  onSave = () => this.props.onSave({ duration: '15 min' })

  navigateBackward = () => navigate(this.challengeNavigator, 'prize');

  navigateForward = () => navigate(this.mainNavigator, 'home');

  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <NavBarView
        backward="Prize"
        forward="Create challenge"
        navigateBackward={this.navigateBackward}
        navigateForward={this.navigateForward}
        progress={1}
      />
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont}>Summary</Text>
      </View>
    </View>
  );
}

SummaryView.propTypes = propTypes;

export default SummaryView;

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
};

const SummaryView = (props) => (
  <View style={newChallengeStyles.mainContainer}>
    <NavBarView
      backward="Prize"
      forward="Create challenge"
      navigateBackward={() => navigate(props.challengeNavigator, 'prize')}
      navigateForward={() => navigate(props.mainNavigator, 'home')}
      progress={0.75}
    />
    <View style={newChallengeStyles.contentContainer}>
      <Text style={newChallengeStyles.titleFont}>Summary</Text>
    </View>
  </View>
);

SummaryView.propTypes = propTypes;

export default SummaryView;

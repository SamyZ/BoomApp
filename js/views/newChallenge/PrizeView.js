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
};

const PrizeView = (props) => (
  <View style={newChallengeStyles.mainContainer}>
    <NavBarView
      backward="Friends"
      forward="Summary"
      navigateBackward={() => navigate(props.challengeNavigator, 'prize')}
      navigateForward={() => navigate(props.challengeNavigator, 'summary')}
      progress={0.75}
    />
    <View style={newChallengeStyles.contentContainer}>
      <Text style={newChallengeStyles.titleFont}>Prize</Text>
    </View>
  </View>
);

PrizeView.propTypes = propTypes;

export default PrizeView;

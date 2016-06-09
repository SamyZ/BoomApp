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

const FriendsView = (props) => (
  <View style={newChallengeStyles.mainContainer}>
    <NavBarView
      backward="Excercise"
      forward="Prize"
      navigateBackward={() => navigate(props.challengeNavigator, 'exercise')}
      navigateForward={() => navigate(props.challengeNavigator, 'prize')}
      progress={0.75}
    />
    <View style={newChallengeStyles.contentContainer}>
      <Text style={newChallengeStyles.titleFont}>Friends</Text>
    </View>
  </View>
);

FriendsView.propTypes = propTypes;

export default FriendsView;

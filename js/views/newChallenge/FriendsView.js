import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import newChallengeStyles from '../../styles/newChallenge/newChallengeStyles';

const propTypes = {
  onChallengeUpdate: React.PropTypes.func,
};

class FriendsView extends React.Component {
  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont}>Friends</Text>
      </View>
    </View>
  );
}

FriendsView.propTypes = propTypes;

export default FriendsView;

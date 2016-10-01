import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import challengeStyles from '../../styles/home/challengeStyles';

const propTypes = {
  challenge: React.PropTypes.object,
};

const ChallengeView = (props) => (
  <View style={challengeStyles.mainContainer}>
    <View style={challengeStyles.topContainer}>
      <View style={challengeStyles.topLeftContainer}>
        <Text style={challengeStyles.mainFont}>
          {`${props.challenge.sport}:  ${props.challenge.objective.value} ${props.challenge.objective.unit}`}
        </Text>
      </View>
      <View style={challengeStyles.topRightContainer}>
        <Text style={challengeStyles.mainFont}>
          {`${props.challenge.duration.value} ${props.challenge.duration.unit}`}
        </Text>
      </View>
    </View>
    <View style={challengeStyles.bottomContainer}>
      <Text style={challengeStyles.mainFont}>{`Challenge ${props.challenge.id}`}</Text>
    </View>
  </View>
);

ChallengeView.propTypes = propTypes;

export default ChallengeView;

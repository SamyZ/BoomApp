import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import newChallengeStyles from '../../styles/newChallenge/newChallengeStyles';

const propTypes = {
  challenge: React.PropTypes.object,
};

const repetitionPicker = {
  7: 'Every day',
  6: '6 times a week',
  5: '5 times a week',
  4: '4 times a week',
  3: '3 times a week',
  2: 'Twice a week',
  1: 'Once a week',
  0: 'Once every 2 weeks',
};

const SummaryView = (props) => (
  <View style={newChallengeStyles.mainContainer}>
    <View style={newChallengeStyles.contentContainer}>
      <View style={newChallengeStyles.recapContainer}>
        <Text style={newChallengeStyles.titleFont}>Sport</Text>
        <Text style={newChallengeStyles.sportRecapFont}>{props.challenge.sport}</Text>
      </View>
      <View style={newChallengeStyles.recapContainer}>
        <Text style={newChallengeStyles.titleFont}>Exercise</Text>
        <Text style={newChallengeStyles.exerciseRecapFont}>
          {`${props.challenge.objective.value} ${props.challenge.objective.unit}`}
        </Text>
        <Text style={newChallengeStyles.exerciseRecapFont}>{repetitionPicker[props.challenge.repetition]}</Text>
        <Text style={newChallengeStyles.exerciseRecapFont}>
          {`${props.challenge.duration.value} ${props.challenge.duration.unit}`}
        </Text>
      </View>
      <View style={newChallengeStyles.recapContainer}>
        <Text style={newChallengeStyles.titleFont}>Versus</Text>
      </View>
      {props.challenge.prize ?
        <View style={newChallengeStyles.recapContainer}>
          <Text style={newChallengeStyles.titleFont}>Prize</Text>
          <Text style={newChallengeStyles.prizeRecapFont}>{props.challenge.prize}</Text>
        </View>
      : null}
    </View>
  </View>
);

SummaryView.propTypes = propTypes;

export default SummaryView;

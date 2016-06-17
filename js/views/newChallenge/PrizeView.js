import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import newChallengeStyles from '../../styles/newChallenge/newChallengeStyles';

const propTypes = {
  onSave: React.PropTypes.func,
};

class PrizeView extends React.Component {
  onSave = () => this.props.onSave({ duration: '15 min' })

  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont}>Prize</Text>
      </View>
    </View>
  );
}

PrizeView.propTypes = propTypes;

export default PrizeView;

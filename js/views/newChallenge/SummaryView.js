import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import newChallengeStyles from '../../styles/newChallenge/newChallengeStyles';

const propTypes = {
  onSave: React.PropTypes.func,
};

class SummaryView extends React.Component {
  onSave = () => this.props.onSave({ duration: '15 min' })

  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont}>Summary</Text>
      </View>
    </View>
  );
}

SummaryView.propTypes = propTypes;

export default SummaryView;

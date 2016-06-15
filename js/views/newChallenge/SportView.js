import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import newChallengeStyles from '../../styles/newChallenge/newChallengeStyles';
import ItemSelectView from './ItemSelectView';

const sportItemStyle = {
  marginTop: 10,
  labelFontSize: 38,
  iconFontSize: 45,
};

const challengeItemStyle = {
  marginTop: 10,
  labelFontSize: 19,
  iconFontSize: 22,
};

const propTypes = {
  onSave: React.PropTypes.func,
};

class SportView extends React.Component {
  onSave = () => this.props.onSave({ fitness: 'Chest program' })
  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont} onPress={this.onSave}>Sport</Text>
        <View style={newChallengeStyles.itemsContainer} >
          <ItemSelectView label="Fitness" style={sportItemStyle} />
          <ItemSelectView label="Cardio" style={sportItemStyle} />
          <ItemSelectView label="Crossfit" style={sportItemStyle} />
        </View>
        <Text style={newChallengeStyles.titleFont}>Challenge</Text>
        <View style={newChallengeStyles.itemsContainer} >
          <ItemSelectView label="Chest Program" style={challengeItemStyle} />
          <ItemSelectView label="Back" style={challengeItemStyle} />
          <ItemSelectView label="Abs Program" style={challengeItemStyle} />
        </View>
      </View>
    </View>
  );
}

SportView.propTypes = propTypes;

export default SportView;

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { navigate } from '../../utils/Nav';
import newChallengeStyles from '../../styles/newChallenge/newChallengeStyles';
import NavBarView from './NavBarView';
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
  challengeNavigator: React.PropTypes.object,
  mainNavigator: React.PropTypes.object,
  onSave: React.PropTypes.func,
};

const SportView = (props) => (
  <View style={newChallengeStyles.mainContainer}>
    <NavBarView
      backward="Cancel"
      forward="Exercise"
      navigateBackward={() => navigate(props.mainNavigator, 'home')}
      navigateForward={() => navigate(props.challengeNavigator, 'exercise')}
      progress={0.25}
    />
    <View style={newChallengeStyles.contentContainer}>
      <Text style={newChallengeStyles.titleFont} onPress={() => props.onSave({ fitness: 'Chest program' })}>Sport</Text>
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

SportView.propTypes = propTypes;

export default SportView;

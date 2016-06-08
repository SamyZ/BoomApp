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

const propTypes = {
  challengeNavigator: React.PropTypes.object,
  onSave: React.PropTypes.func,
};

const ExcerciseView = (props) => (
  <View style={newChallengeStyles.mainContainer}>
    <NavBarView
      backward="Sport"
      forward="Friends"
      navigateBackward={() => navigate(props.challengeNavigator, 'sport')}
      navigateForward={() => navigate(props.challengeNavigator, 'friends')}
      progress={0.5}
    />
    <View style={newChallengeStyles.contentContainer}>
      <Text style={newChallengeStyles.titleFont} onPress={() => props.onSave({ duration: '15 min' })}>Exercise</Text>
      <View style={newChallengeStyles.itemsContainer} >
        <ItemSelectView label="15 min" style={sportItemStyle} />
        <ItemSelectView label="Every Day" style={sportItemStyle} />
        <ItemSelectView label="1 month" style={sportItemStyle} />
      </View>
      <Text style={newChallengeStyles.titleFont}>Program</Text>
    </View>
  </View>
);

ExcerciseView.propTypes = propTypes;

export default ExcerciseView;

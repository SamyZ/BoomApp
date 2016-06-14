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

class ExcerciseView extends React.Component {
  onSave = () => this.props.onSave({ duration: '15 min' })

  navigateBackward = () => navigate(this.props.challengeNavigator, 'sport');

  navigateForward = () => navigate(this.props.challengeNavigator, 'friends');

  render = () => (
    <View style={newChallengeStyles.mainContainer}>
      <NavBarView
        backward="Sport"
        forward="Friends"
        navigateBackward={this.navigateBackward}
        navigateForward={this.navigateForward}
        progress={0.4}
      />
      <View style={newChallengeStyles.contentContainer}>
        <Text style={newChallengeStyles.titleFont} onPress={this.onSave}>Exercise</Text>
        <View style={newChallengeStyles.itemsContainer} >
          <ItemSelectView label="15 min" style={sportItemStyle} />
          <ItemSelectView label="Every Day" style={sportItemStyle} />
          <ItemSelectView label="1 month" style={sportItemStyle} />
        </View>
        <Text style={newChallengeStyles.titleFont}>Program</Text>
      </View>
    </View>
  );
}

ExcerciseView.propTypes = propTypes;

export default ExcerciseView;

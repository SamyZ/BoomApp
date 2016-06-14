import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import mainStyles from '../../styles/main/mainStyles';
import NavBarStyles from '../../styles/newChallenge/navBarStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
  backward: React.PropTypes.string,
  forward: React.PropTypes.string,
  navigateBackward: React.PropTypes.func,
  navigateForward: React.PropTypes.func,
  progress: React.PropTypes.number,
};

const NavBarView = (props) => (
  <View style={NavBarStyles.mainContainer}>
    <View style={NavBarStyles.buttonsContainer}>
      <TouchableOpacity style={NavBarStyles.leftButtonContainer} onPress={props.navigateBackward}>
        <Icon name="md-arrow-back" color={mainStyles.themeColors.choice} style={NavBarStyles.navBarFont}>
          <Text style={NavBarStyles.navBarFont}>{`  ${props.backward}`}</Text>
        </Icon>
      </TouchableOpacity>
      <TouchableOpacity style={NavBarStyles.rightButtonContainer} onPress={props.navigateForward}>
        <Text style={NavBarStyles.navBarFont}>
          {`${props.forward}  `}
          <Icon name="md-arrow-forward" color={mainStyles.themeColors.choice} style={NavBarStyles.navBarFont} />
        </Text>
      </TouchableOpacity>
    </View>
    <View style={NavBarStyles.progressLineContainer} >
      <View style={[NavBarStyles.progressLineLeftContainer, { flex: props.progress }]} />
      <View style={[NavBarStyles.progressLineRightContainer, { flex: 1 - props.progress }]} />
    </View>
  </View>
);

NavBarView.propTypes = propTypes;

export default NavBarView;

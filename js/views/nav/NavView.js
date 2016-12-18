import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import NavStyles from '../../styles/nav/navStyles';

const propTypes = {
  navigateToRoute: React.PropTypes.func,
};

const NavView = (props) => (
  <View style={NavStyles.mainContainer}>
    <View style={NavStyles.menuContainer}>
      <Text style={NavStyles.titleFont}>Challenges</Text>
      <TouchableHighlight onPress={() => props.navigateToRoute('newChallenge')}>
        <Text style={NavStyles.itemFont}>Create new challenge</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigateToRoute('login')}>
        <Text style={NavStyles.itemFont}>Actual challenge</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigateToRoute('home')}>
        <Text style={NavStyles.itemFont}>Finished challenge</Text>
      </TouchableHighlight>
      <Text style={NavStyles.titleFont}>Profile</Text>
      <TouchableHighlight onPress={() => props.navigateToRoute('home')}>
        <Text style={NavStyles.itemFont}>Personal statistics</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigateToRoute('home')}>
        <Text style={NavStyles.itemFont}>Account settings</Text>
      </TouchableHighlight>
      <Text style={NavStyles.titleFont}>Social</Text>
      <TouchableHighlight onPress={() => props.navigateToRoute('home')}>
        <Text style={NavStyles.itemFont}>All friends</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigateToRoute('home')}>
        <Text style={NavStyles.itemFont}>Add a new friend</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => props.navigateToRoute('home')}>
        <Text style={NavStyles.itemFont}>Share your profile</Text>
      </TouchableHighlight>
    </View>
  </View>
);

NavView.propTypes = propTypes;

export default NavView;

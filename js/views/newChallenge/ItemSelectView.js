import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import mainStyles from '../../styles/main/mainStyles';
import itemSelectStyles from '../../styles/newChallenge/itemSelectStyles';

const propTypes = {
  label: React.PropTypes.string,
  style: React.PropTypes.object,
};

const ItemSelectView = (props) => (
  <TouchableOpacity
    style={[itemSelectStyles.mainContainer, { marginTop: props.style.marginTop }]}
    onPress={() => {}}
  >
    <View style={itemSelectStyles.labelContainer}>
      <Text style={[itemSelectStyles.labelFont, { fontSize: props.style.labelFontSize }]}>{props.label}</Text>
    </View>
    <View style={itemSelectStyles.iconContainer} >
      <Icon
        name="ios-arrow-dropdown-outline"
        color={mainStyles.themeColors.choice}
        style={[itemSelectStyles.iconFont, { fontSize: props.style.iconFontSize }]}
      />
    </View>
  </TouchableOpacity>
);

ItemSelectView.propTypes = propTypes;

export default ItemSelectView;

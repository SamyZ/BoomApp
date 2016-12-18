import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import itemSelectStyles from '../../styles/newChallenge/itemSelectStyles';

const propTypes = {
  label: React.PropTypes.string,
  style: React.PropTypes.object,
  onItemSelect: React.PropTypes.func,
};

const ItemSelectView = (props) => {
  console.log(props)
    return (
    <View style={[itemSelectStyles.mainContainer, { marginTop: props.style.marginTop, opacity: props.style.opacity }]} >
      <TouchableOpacity style={itemSelectStyles.touchableContainer} onPress={() => props.onItemSelect(props.label)} >
        <View style={itemSelectStyles.labelContainer}>
          <Text style={[itemSelectStyles.labelFont, { fontSize: props.style.labelFontSize }]}>{props.label}</Text>
        </View>
        <View style={itemSelectStyles.iconContainer} >
          <Icon
            name="ios-arrow-dropdown-outline"
            color={props.style.iconColor}
            style={[itemSelectStyles.iconFont, { fontSize: props.style.iconFontSize }]}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

ItemSelectView.propTypes = propTypes;

export default ItemSelectView;

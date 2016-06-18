import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import mainStyles from '../../styles/main/mainStyles';
import navBarStyles from '../../styles/newChallenge/navBarStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const propTypes = {
  routeStack: React.PropTypes.array,
  navigateBackward: React.PropTypes.func,
  navigateForward: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  challenge: React.PropTypes.object,
};

class NavBarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      backwardLabel: 'Cancel',
      forwardLabel: props.routeStack[1].name,
      progress: 1 / props.routeStack.length,
    };
  }

  navigateBackward = () => {
    if (this.state.index === 0) {
      this.props.navigateBackward(true); // Leave challenge creation
    } else {
      const index = this.state.index - 1;
      this.setState({
        index,
        backwardLabel: index ? this.props.routeStack[index - 1].name : 'Cancel',
        forwardLabel: this.props.routeStack[index + 1].name,
        progress: this.state.progress - 1 / this.props.routeStack.length,
      });
      this.props.navigateBackward(false); // Stay on challenge creation
    }
  }

  navigateForward = () => {
    if (this.state.index + 1 === this.props.routeStack.length) {
      this.props.navigateForward(true); // Leave challenge creation
    } else {
      const index = this.state.index + 1;
      this.setState({
        index,
        backwardLabel: this.props.routeStack[index - 1].name,
        forwardLabel: (index + 1 !== this.props.routeStack.length) ? this.props.routeStack[index + 1].name : 'Create challenge',
        progress: this.state.progress + 1 / this.props.routeStack.length,
      });
      this.props.navigateForward(false); // Stay on challenge creation
    }
  }

  render() {
    let forwardDisable = false;
    switch (this.state.index) {
      case 0:
        forwardDisable = this.props.challenge.sport ? false : true;
        break;
      case 1:
        forwardDisable = this.props.challenge.objective.type ? false : true;
        break;
      default:
        break;
    }
    return (
      <View style={navBarStyles.mainContainer}>
        <View style={navBarStyles.buttonsContainer}>
          <TouchableOpacity style={navBarStyles.leftButtonContainer} onPress={this.navigateBackward}>
            <Icon name="md-arrow-back" color={mainStyles.themeColors.textPrimary} style={navBarStyles.navBarFont}>
              <Text style={navBarStyles.navBarFont}>{`  ${this.state.backwardLabel}`}</Text>
            </Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={navBarStyles.rightButtonContainer}
            onPress={this.navigateForward}
            disabled={forwardDisable}
          >
            <Text style={navBarStyles.navBarFont}>
              {`${this.state.forwardLabel}  `}
              <Icon name="md-arrow-forward" color={mainStyles.themeColors.textPrimary} style={navBarStyles.navBarFont} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={navBarStyles.progressLineContainer} >
          <View style={[navBarStyles.progressLineLeftContainer, { flex: this.state.progress }]} />
          <View style={[navBarStyles.progressLineRightContainer, { flex: 1 - this.state.progress }]} />
        </View>
      </View>
    );
  }
}

NavBarView.propTypes = propTypes;

export default NavBarView;

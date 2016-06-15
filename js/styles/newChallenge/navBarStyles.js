import { StyleSheet } from 'react-native';
import mainStyles from '../main/mainStyles';

const height = 120;

const navBarStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: mainStyles.themeColors.primary,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftButtonContainer: {
    flex: 1,
    marginLeft: 40,
  },
  rightButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 40,
  },
  progressLineContainer: {
    flexDirection: 'row',
    marginBottom: 35,
    marginLeft: 40,
    marginRight: 40,
  },
  progressLineLeftContainer: {
    borderBottomColor: mainStyles.themeColors.choice,
    borderBottomWidth: 2.5,
  },
  progressLineRightContainer: {
    borderBottomColor: mainStyles.themeColors.progressLine,
    borderBottomWidth: 2.5,
  },
  navBarFont: {
    color: mainStyles.themeColors.choice,
    fontSize: 17,
  },
});

navBarStyles.height = height;

export default navBarStyles;

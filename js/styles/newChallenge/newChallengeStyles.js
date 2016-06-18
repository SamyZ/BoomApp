import { StyleSheet } from 'react-native';
import mainStyles from '../main/mainStyles';
import navBarStyles from './navBarStyles';

const newChallengeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: mainStyles.themeColors.secondary,
    marginTop: navBarStyles.height,
  },
  contentContainer: {
    backgroundColor: mainStyles.themeColors.secondary,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  itemsContainer: {
    marginBottom: 20,
  },
  setttingContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  settingInputContainer: {
    flex: 0.1,
  },
  settingPickerContainer: {
    marginTop: 5,
    flex: 0.9,
  },
  recapContainer: {
    marginTop: 10,
  },
  titleFont: {
    color: mainStyles.themeColors.primary,
    fontSize: 18,
    marginTop: 10,
  },
  inputFont: {
    fontSize: 15,
    color: mainStyles.themeColors.textPrimary,
  },
  picker: {
    color: mainStyles.themeColors.textPrimary,
  },
  sportRecapFont: {
    fontSize: 33,
    color: mainStyles.themeColors.textPrimary,
  },
  exerciseRecapFont: {
    fontSize: 22,
    color: mainStyles.themeColors.textPrimary,
  },
  prizeRecapFont: {
    fontSize: 22,
    color: mainStyles.themeColors.textPrimary,
  },
});


export default newChallengeStyles;

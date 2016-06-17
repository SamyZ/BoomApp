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
    flex: 1,
    backgroundColor: mainStyles.themeColors.secondary,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  itemsContainer: {
    marginBottom: 20,
  },
  titleFont: {
    color: mainStyles.themeColors.primary,
    fontSize: 18,
    marginTop: 10,
  },
});


export default newChallengeStyles;

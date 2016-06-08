import { StyleSheet } from 'react-native';
import mainStyles from '../main/mainStyles';

const newChallengeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: mainStyles.themeColors.secondary,
  },
  contentContainer: {
    flex: 0.8,
    backgroundColor: mainStyles.themeColors.secondary,
    marginTop: 60,
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

import { StyleSheet } from 'react-native';
import mainStyles from '../main/mainStyles';

const homeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: mainStyles.themeColors.secondary,
  },
  mainFont: {
    fontSize: 18,
    textAlign: 'center',
    color: mainStyles.themeColors.textPrimary,
  },
});

export default homeStyles;

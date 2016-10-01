import { StyleSheet } from 'react-native';
import mainStyles from '../main/mainStyles';

const homeStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: mainStyles.themeColors.secondary,
  },
});

export default homeStyles;

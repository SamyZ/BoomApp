import { StyleSheet } from 'react-native';

const themeColors = {
  primary: '#53dc99',
  progressLine: '#74feb0',
  secondary: '#050505',
  choice: '#FFF',
};

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.secondary,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
});

mainStyles.themeColors = themeColors;

export default mainStyles;

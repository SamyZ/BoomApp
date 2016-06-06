import { StyleSheet } from 'react-native';

const themeColors = {
  primary: '#59fdb8',
  secondary: '#050505',
  white: '#FFF',
};

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.secondary,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

mainStyles.themeColors = themeColors;

export default mainStyles;

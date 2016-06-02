import { StyleSheet } from 'react-native';
import mainStyles from '../mainStyles';

const loginStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: mainStyles.themeColors.secondary,
  },
  welcomeContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  inputsContainer: {
    flex: 0.25,
    marginTop: 10,
    marginBottom: 10,
  },
  inputContainer: {
  },
  forgotContainer: {
    alignItems: 'flex-end',
    padding: 15,
  },
  signinContainer: {
    backgroundColor: mainStyles.themeColors.main,
    padding: 20,
    alignItems: 'center',
  },
  signupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.15,
  },
  welcomeFont: {
    fontSize: 25,
    textAlign: 'center',
    color: mainStyles.themeColors.main,
  },
  inputFont: {
    marginLeft: 40,
    marginRight: 40,
    color: mainStyles.themeColors.main,
  },
  passwordFont: {
    color: '#FFF',
    marginRight: 30,
  },
  signinFont: {
    fontSize: 20,
  },
  signupFont: {
    color: '#FFF',
  },
  boldFont: {
    fontWeight: 'bold',
  },
});

export default loginStyles;

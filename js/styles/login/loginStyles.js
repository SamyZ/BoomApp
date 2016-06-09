import { StyleSheet } from 'react-native';
import mainStyles from '../main/mainStyles';

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
    backgroundColor: mainStyles.themeColors.primary,
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
    color: mainStyles.themeColors.primary,
  },
  inputFont: {
    marginLeft: 40,
    marginRight: 40,
    color: mainStyles.themeColors.primary,
  },
  passwordFont: {
    color: mainStyles.themeColors.choice,
    marginRight: 30,
  },
  signinFont: {
    fontSize: 20,
  },
  signupFont: {
    color: mainStyles.themeColors.choice,
  },
  boldFont: {
    fontWeight: 'bold',
  },
});

export default loginStyles;

import { StyleSheet } from 'react-native';
import mainStyles from '../main/mainStyles';

const challengeStyles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'grey',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLeftContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  topRightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  bottomContainer: {

  },
  mainFont: {
    fontSize: 18,
    textAlign: 'center',
    color: mainStyles.themeColors.textPrimary,
  },
});

export default challengeStyles;

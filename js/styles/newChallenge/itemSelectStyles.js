import { StyleSheet } from 'react-native';
import mainStyles from '../main/mainStyles';

const newChallengeStyles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
  },
  touchableContainer: {
    // flex: 1,
    flexDirection: 'row',
  },
  labelContainer: {
    // flex: 1,
  },
  iconContainer: {
    // flex: 1,
    alignItems: 'flex-end',
  },
  labelFont: {
    color: mainStyles.themeColors.textPrimary,
  },
  iconFont: {
    fontWeight: '300',
  },
});


export default newChallengeStyles;

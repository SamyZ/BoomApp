import { StyleSheet } from 'react-native';
import mainStyles from '../main/mainStyles';

const NavStyles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: mainStyles.themeColors.secondary,
  },
  menuContainer: {
    borderLeftWidth: 40,
    borderTopWidth: 80,
  },
  titleFont: {
    fontSize: 34,
    color: mainStyles.themeColors.primary,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  itemFont: {
    fontSize: 14,
    color: mainStyles.themeColors.white,
    marginBottom: 8,
  },
});

export default NavStyles;

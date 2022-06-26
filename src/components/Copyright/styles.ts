import { theme } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 12,
    color: theme.colors.text_secondary,
    fontFamily: theme.fonts.medium
  }
});
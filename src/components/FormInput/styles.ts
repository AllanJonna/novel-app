import {StyleSheet, ViewStyle, Platform} from 'react-native';

import * as appTheme from 'assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    width: 259,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;

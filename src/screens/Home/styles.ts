import {StyleSheet, ViewStyle} from 'react-native';

import * as appTheme from 'assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    backgroundColor: appTheme['color-white'],
    paddingHorizontal: 16,
  },
});

export default styles;

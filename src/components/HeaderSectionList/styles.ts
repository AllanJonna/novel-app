import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import * as appTheme from 'assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    width: '100%',
    height: 24,
    backgroundColor: 'transparent',
    borderLeftWidth: 4,
    borderColor: appTheme['color-primary'],
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;

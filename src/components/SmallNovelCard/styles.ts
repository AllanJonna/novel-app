import {StyleSheet, ViewStyle, TextStyle, ImageStyle, View} from 'react-native';

import * as appTheme from 'assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  rate: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    width: 160,
    height: 97,
    backgroundColor: 'transparent',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 24,
  },
  image: {
    width: 60,
    height: '100%',
    borderRadius: 8,
    marginRight: 7,
  },
  title: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '600',
    width: 100,
  },
  rate: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
});

export default styles;

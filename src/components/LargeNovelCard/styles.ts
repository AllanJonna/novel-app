import {StyleSheet, ViewStyle, TextStyle, ImageStyle, View} from 'react-native';

import * as appTheme from 'assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  flagBody: ViewStyle;
  flagTitle: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    width: 96,
    height: null,
    backgroundColor: 'transparent',
    marginRight: 10,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 14,
  },
  title: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
  },
  flagBody: {
    width: 56,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appTheme['color-primary'],
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
  },
  flagTitle: {
    fontFamily: 'Noto Sans',
    fontSize: 11,
    color: appTheme['color-white'],
  },
});

export default styles;

import {StyleSheet, ViewStyle, TextStyle, ImageStyle, View} from 'react-native';

import * as appTheme from 'assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  desc: TextStyle;
  typeBody: ViewStyle;
  typeTitle: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    width: '100%',
    height: 119,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    height: '100%',
    width: 75,
    borderRadius: 8,
    marginRight: 10,
  },
  title: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '700',
  },
  desc: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    width: '40%',
    marginVertical: 6,
  },
  typeBody: {
    width: 50,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
  },
  typeTitle: {
    fontFamily: 'Noto Sans',
    fontSize: 11,
  },
});

export default styles;

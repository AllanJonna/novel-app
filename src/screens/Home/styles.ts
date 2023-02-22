import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import * as appTheme from 'assets/custom-theme.json';

interface IStyles {
  container: ViewStyle;
  topHeaderBody: ViewStyle;
  copilotBody: ViewStyle;
  copilotTitile: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    backgroundColor: appTheme['color-white'],
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  topHeaderBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 36,
  },
  copilotBody: {
    width: 96,
    height: 32,
    position: 'absolute',
    top: 30,
    left: -35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  copilotTitile: {
    fontFamily: 'Noto Sans',
    color: appTheme['color-white'],
    fontSize: 11,
  },
});

export default styles;

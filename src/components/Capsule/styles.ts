import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  capsuleText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    width: null,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#F3F3F3',
    paddingVertical: 9,
    paddingHorizontal: 12,
    marginRight: 13,
    marginBottom: 16,
  },
  capsuleText: {
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
});

export default styles;

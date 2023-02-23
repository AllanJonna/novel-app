import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  button: ViewStyle;
  bottomBar: ViewStyle;
  btnCircle: ViewStyle;
  imgCircle: ImageStyle;
  img: ImageStyle;
  navIcon: ImageStyle;
  navText: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {
    paddingBottom: 20,
    borderColor: 'transparent',
  },
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#61C0CC',
    borderWidth: 4,
    borderColor: '#3494AA',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
  navIcon: {
    width: 25,
    height: 25,
  },
  navText: {
    fontFamily: 'Noto Sans',
    fontSize: 10,
    fontWeight: '500',
  },
});

export default styles;

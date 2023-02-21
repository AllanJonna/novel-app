module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@appTypes': './src/appTypes',
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@services': './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin',
    'nativewind/babel',
  ],
};

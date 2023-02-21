import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const HomeScreen = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text>This is home</Text>
    </View>
  );
};

export default HomeScreen;

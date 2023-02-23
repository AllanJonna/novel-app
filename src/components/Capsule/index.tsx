import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

interface ICapsule {
  onPress?: () => void;
  title: string;
  icon: any;
}

const Capsule = ({onPress, title, icon}: ICapsule): React.ReactElement => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <Text style={styles.capsuleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Capsule;

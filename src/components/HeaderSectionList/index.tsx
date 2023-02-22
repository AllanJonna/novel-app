import * as React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

interface IHeaderSectionList {
  sectionTitle: string;
}

const HeaderSectionList = ({
  sectionTitle,
}: IHeaderSectionList): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sectionTitle}</Text>
    </View>
  );
};

export default HeaderSectionList;

import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {INovel} from '@appTypes/novel.type';

import styles from './styles';

interface ILargeNovelCard {
  item: INovel;
}

const LargeNovelCard = ({item}: ILargeNovelCard): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: item?.urlImage}} style={styles.image} />
      <Text numberOfLines={2} style={styles.title} ellipsizeMode="tail">
        {item?.title}
      </Text>
      {item?.isPopular ? (
        <View style={styles.flagBody}>
          <Text style={styles.flagTitle}>Popular</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default LargeNovelCard;

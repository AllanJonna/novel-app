import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {INovel} from '@appTypes/novel.type';

import styles from './styles';

interface ILongNovelCard {
  item: INovel;
}

const LongNovelCard = ({item}: ILongNovelCard): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: item?.urlImage}} style={styles.image} />
      <View>
        <Text numberOfLines={1} style={styles.title} ellipsizeMode="tail">
          {item?.title}
        </Text>
        <Text numberOfLines={3} style={styles.desc} ellipsizeMode="tail">
          {item?.description}
        </Text>
        <View style={styles.typeBody}>
          <Text style={styles.typeTitle}>{item?.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LongNovelCard;

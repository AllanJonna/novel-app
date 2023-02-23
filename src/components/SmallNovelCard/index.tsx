import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {INovel} from '@appTypes/novel.type';

import {StarIcon} from '@assets/Icons';
import styles from './styles';

interface ISmallNovelCard {
  item: INovel;
}

const SmallNovelCard = ({item}: ISmallNovelCard): React.ReactElement => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: item?.urlImage}} style={styles.image} />
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
        <Text numberOfLines={2} style={styles.title} ellipsizeMode="tail">
          {item?.title}
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <StarIcon />
          <Text style={styles.rate}>{item?.rate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SmallNovelCard;

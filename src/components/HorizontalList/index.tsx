import * as React from 'react';
import {FlatList, View} from 'react-native';

import {INovel} from '@appTypes/novel.type';

interface IHorizontalList {
  data: any[];
  cardComponent: (params: INovel) => void;
}

const HorizontalList = ({data, cardComponent}: IHorizontalList) => {
  return (
    <View style={{marginBottom: 30}}>
      <FlatList
        data={data}
        nestedScrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item): string => item?.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}: any) => cardComponent(item)}
      />
    </View>
  );
};

export default HorizontalList;

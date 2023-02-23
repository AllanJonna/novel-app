import * as React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

import {INovel} from '@appTypes/novel.type';

import {
  FormInput,
  HeaderSectionList,
  LargeNovelCard,
  SmallNovelCard,
  Capsule,
  LongNovelCard,
} from '@components';
import {BoxGiftIcon, BellNotiificationIcon} from '@assets/Icons';
import {assets} from '@assets/assets';
import styles from './styles';

interface IIntialState {
  currentRelease: INovel[];
  newChapter: INovel[];
  listCapsule: any;
  moreNovel: INovel[];
}

const HomeScreen = (): React.ReactElement => {
  const homeStores: IIntialState = useSelector(state => state);
  const {currentRelease, newChapter, listCapsule, moreNovel} = homeStores;

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ScrollView
        style={{flex: 1, flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topHeaderBody}>
          <FormInput
            onChangeValue={value => console.log('ets', value)}
            placeHolder={'Cari judul novel'}
          />
          <TouchableOpacity>
            <BoxGiftIcon />
            <ImageBackground
              source={assets.images.copilotBg}
              style={styles.copilotBody}>
              <Text style={styles.copilotTitile}>Ambil Hadiah</Text>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity>
            <BellNotiificationIcon />
          </TouchableOpacity>
        </View>

        <HeaderSectionList sectionTitle="Baru Rilis" />
        <View style={{marginBottom: 30}}>
          <FlatList
            data={currentRelease}
            nestedScrollEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item): string => item?.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <LargeNovelCard item={item} />}
          />
        </View>

        <HeaderSectionList sectionTitle="Chaper Baru Setiap Hari" />
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          nestedScrollEnabled
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          data={newChapter}
          renderItem={({item}): JSX.Element => {
            return <SmallNovelCard item={item} />;
          }}
        />

        <HeaderSectionList sectionTitle="Eklusif" />
        <View style={{marginBottom: 30}}>
          <FlatList
            data={currentRelease}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item): string => item?.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <LargeNovelCard item={item} />}
          />
        </View>

        <HeaderSectionList sectionTitle="Kategori" />
        <ScrollView
          style={{marginBottom: 10}}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <FlatList
            scrollEnabled={false}
            contentContainerStyle={{
              alignSelf: 'flex-start',
            }}
            numColumns={Math.ceil(listCapsule.length / 2)}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={listCapsule}
            renderItem={({item}) => {
              return <Capsule title={item?.title} icon={item?.icon} />;
            }}
          />
        </ScrollView>

        <HeaderSectionList sectionTitle="Cerita Lengkap" />
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          nestedScrollEnabled
          showsVerticalScrollIndicator={false}
          data={moreNovel}
          style={{marginBottom: 30}}
          renderItem={({item}): JSX.Element => {
            return <LongNovelCard item={item} />;
          }}
        />

        <HeaderSectionList sectionTitle="Rekomendasi" />
        <View style={{marginBottom: 30}}>
          <FlatList
            data={currentRelease}
            nestedScrollEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item): string => item?.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <LargeNovelCard item={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

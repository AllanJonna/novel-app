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

import {INovel} from '@appTypes/novel.type';

import {
  FormInput,
  HeaderSectionList,
  LargeNovelCard,
  SmallNovelCard,
  Capsule,
  LongNovelCard,
} from '@components';
import {
  BoxGiftIcon,
  BellNotiificationIcon,
  BookIcon,
  LoveIcon,
  NinjaIcon,
  FamilyGroupIcon,
  CrownIcon,
  SkullIcon,
} from '@assets/Icons';
import {assets} from '@assets/assets';
import styles from './styles';

const HomeScreen = (): React.ReactElement => {
  const currentRelease: INovel[] = [
    {
      id: 1,
      title: 'Out Last Summer',
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/out-last-summer_Rn5gMq9Go?ik-sdk-version=javascript-1.4.3&updatedAt=1677006001826',
    },
    {
      id: 2,
      title: 'Out Last Summer',
      isPopular: true,
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/out-last-summer_Rn5gMq9Go?ik-sdk-version=javascript-1.4.3&updatedAt=1677006001826',
    },
    {
      id: 3,
      title: 'Out Last Summer',
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/out-last-summer_Rn5gMq9Go?ik-sdk-version=javascript-1.4.3&updatedAt=1677006001826',
    },
    {
      id: 4,
      title: 'Out Last Summer',
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/out-last-summer_Rn5gMq9Go?ik-sdk-version=javascript-1.4.3&updatedAt=1677006001826',
    },
  ];

  const newChapter: INovel[] = [
    {
      id: 1,
      title: 'Memory Memory Memory',
      rate: '4.3',
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/memory_NjEUN_rSF?ik-sdk-version=javascript-1.4.3&updatedAt=1677007149950',
    },
    {
      id: 2,
      title: 'Memory Memory Memory',
      rate: '4.3',
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/memory_NjEUN_rSF?ik-sdk-version=javascript-1.4.3&updatedAt=1677007149950',
    },
    {
      id: 3,
      title: 'Memory',
      rate: '4.3',
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/memory_NjEUN_rSF?ik-sdk-version=javascript-1.4.3&updatedAt=1677007149950',
    },
    {
      id: 4,
      title: 'Memory',
      rate: '4.3',
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/memory_NjEUN_rSF?ik-sdk-version=javascript-1.4.3&updatedAt=1677007149950',
    },
  ];

  const listCapsule = [
    {
      id: 1,
      title: 'Romansa',
      icon: <LoveIcon />,
    },
    {
      id: 2,
      title: 'Fantasi',
      icon: <CrownIcon />,
    },
    {
      id: 3,
      title: 'Misteri',
      icon: <SkullIcon />,
    },
    {
      id: 4,
      title: 'Sastra',
      icon: <BookIcon />,
    },
    {
      id: 5,
      title: 'Aksi',
      icon: <NinjaIcon />,
    },
    {
      id: 6,
      title: 'Keluarga',
      icon: <FamilyGroupIcon />,
    },
  ];

  const moreNovel: INovel[] = [
    {
      id: 1,
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/27834600_EqDAfHtcK.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1677085223712',
      title: 'In The Dark Woods',
      description:
        'Sebuah tragedi pembunuhan terjadi lagi, kali ini menggemparkan penduduk di sekitar Bristone Manor, Sang pu,..',
      type: 'Misteri',
    },
    {
      id: 2,
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/27834600_EqDAfHtcK.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1677085223712',
      title: 'In The Dark Woods',
      description:
        'Sebuah tragedi pembunuhan terjadi lagi, kali ini menggemparkan penduduk di sekitar Bristone Manor, Sang pu,..',
      type: 'Misteri',
    },
    {
      id: 3,
      urlImage:
        'https://ik.imagekit.io/callmejonna/Dreamer/27834600_EqDAfHtcK.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1677085223712',
      title: 'In The Dark Woods',
      description:
        'Sebuah tragedi pembunuhan terjadi lagi, kali ini menggemparkan penduduk di sekitar Bristone Manor, Sang pu,..',
      type: 'Misteri',
    },
  ];

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

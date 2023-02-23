import {INovel} from '@appTypes/novel.type';

import {
  BookIcon,
  LoveIcon,
  NinjaIcon,
  FamilyGroupIcon,
  CrownIcon,
  SkullIcon,
} from '@assets/Icons';

interface IIntialState {
  currentRelease: INovel[];
  newChapter: INovel[];
  listCapsule: any;
  moreNovel: INovel[];
}

const initialState: IIntialState = {
  currentRelease: [
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
  ],
  newChapter: [
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
  ],
  listCapsule: [
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
  ],
  moreNovel: [
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
  ],
};

export const mainReducer = (state = initialState) => {
  return state;
};

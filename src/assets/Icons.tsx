import {IconElement, IconProps} from '@ui-kitten/components';
import React from 'react';
import {ImageProps} from 'react-native';

import Search from './svg/icon-search.svg';
import BoxGift from './svg/box-gift.svg';
import BellNotiification from './svg/bell-notification.svg';
import Star from './svg/star.svg';

import Book from './svg/ic-book.svg';
import Crown from './svg/ic-crown.svg';
import FamilyGroup from './svg/ic-family.svg';
import Love from './svg/ic-love.svg';
import Ninja from './svg/ic-ninja.svg';
import Skull from './svg/ic-skull.svg';

export const SearchIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <Search style={style} width={width || 14} height={height || 14} />
);

export const BoxGiftIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <BoxGift style={style} width={width || 25} height={height || 25} />
);

export const BellNotiificationIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <BellNotiification style={style} width={width || 25} height={height || 25} />
);

export const StarIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <Star style={style} width={width || 18} height={height || 18} />
);

export const BookIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <Book style={style} width={width || 15} height={height || 15} />
);

export const CrownIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <Crown style={style} width={width || 15} height={height || 15} />
);

export const FamilyGroupIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <FamilyGroup style={style} width={width || 15} height={height || 15} />
);

export const LoveIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <Love style={style} width={width || 15} height={height || 15} />
);

export const NinjaIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <Ninja style={style} width={width || 15} height={height || 15} />
);

export const SkullIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <Skull style={style} width={width || 15} height={height || 15} />
);

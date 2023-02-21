import {IconElement, IconProps} from '@ui-kitten/components';
import React from 'react';
import {ImageProps} from 'react-native';

import ChevronLeft from './svg/chevron-left.svg';

export const ChevronLeftIcon = ({
  width,
  height,
  style,
}: IconProps | ImageProps): IconElement => (
  <ChevronLeft style={style} width={width || 16} height={height || 28} />
);

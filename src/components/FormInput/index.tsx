import * as React from 'react';
import {View} from 'react-native';
import {Input} from '@ui-kitten/components';

import {SearchIcon} from '@assets/Icons';
import styles from './styles';

interface IFormInput {
  placeHolder?: string;
  value?: any;
  onChangeValue?: (params: string) => void;
}

const FormInput = ({
  placeHolder = 'Input here',
  value,
  onChangeValue,
}: IFormInput): React.ReactElement => {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <Input
        placeholder={placeHolder}
        onChangeText={text => onChangeValue(text)}
        value={value}
        keyboardType={'default'}
        placeholderTextColor={'#767676'}
        style={{
          backgroundColor: 'transparent',
          borderWidth: 0,
          width: '100%',
        }}
      />
    </View>
  );
};

export default FormInput;

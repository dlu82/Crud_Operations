import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import image from '../../constants/images';

const index = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => navigation.navigate('AddPage')}>
      <Image
        source={image.Plus}
        style={{width: 20, height: 20, tintColor: '#fff'}}
      />
    </TouchableOpacity>
  );
};
export default index;

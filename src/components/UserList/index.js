import React from 'react';

import {View, Text, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import image from '../../constants/images';
import Buttn from '../ButtonComponent';

const index = ({item, didPress}) => {
  // const deleteTask = item => {
  //   const filterData = listArray.filter(item => {
  //     return item?.id != item?.id;
  //   });
  //   setListArray(item);
  // };

  // console.log('++++++=====', item);
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.profilePic}>
        <Image
          source={image.UserMenu}
          style={{width: 50, height: 50, tintColor: '#acadac'}}
        />
      </View>
      <View style={style.details}>
        <Text>{item.name}</Text>
        <Text>{item.details}</Text>
        <Text>{item.mail}</Text>
        <Text>{item.Mob}</Text>
      </View>
      <View style={style.Buttn}>
        <Buttn Name={'Edit'} didTapon={didPress} />
        <Buttn Name={'Delete'} />
      </View>
    </View>
  );
};
export default index;

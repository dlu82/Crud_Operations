import React from 'react';

import {View, Text, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import image from '../../constants/images';
import Buttn from '../ButtonComponent';

const index = ({item, didPress, onDeletePressed}) => {
  const navigation = useNavigation();

  //Delete Alert
  const deleteAlert = () => {
    Alert.alert('Delete', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => onDeletePressed(item)},
    ]);
  };

  return (
    <View style={style.container}>
      <View style={style.profilePic}>
        <Image
          source={{uri: item.Image_uri}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}
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
        <Buttn Name={'Delete'} didTapon={item => deleteAlert()} />
      </View>
    </View>
  );
};
export default index;

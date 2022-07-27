import React from 'react';
import {View, Image, Text, Pressable, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import image from '../../constants/images'

const index = ({isBack, isHeart, TapOn}) => {
  const navigation = useNavigation();

  const didTapOnBack = () => {
    console.log('dilshad===');
    navigation.goBack('');
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <TouchableOpacity >
             {/* onPress={TapOn?TapOn:didTapOnBack} > */}
              <Image source={image.Menu} style={{width: 20, height: 20, transform:[{rotate: '180deg'}]}}/>
          </TouchableOpacity>
      </View>
      <View>
      <Text style={{color: 'black', fontSize: 15, fontFamily: 'Roboto-BoldItalic'}}>User List</Text>
      </View>
      <View>
        <Image source={image.Search} style={{width: 20, height: 20, }}/>
      </View>
    </View>
  );
};
export default index;
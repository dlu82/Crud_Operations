import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';
const index = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'#87bfc9'} />
      <View>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 20,
            fontSize: 30,
            color: '#000',
          }}>
          Fill In
        </Text>
        <TextInput
          style={style.input}
          placeholder="First Name"
          placeholderTextColor={'#000'}
        />
        <TextInput
          style={style.input}
          placeholder="Last Name"
          keyboardType="qwerty"
          placeholderTextColor={'#000'}
        />
        <TextInput
          style={style.input}
          placeholder="E-mail"
          keyboardType="qwerty"
          placeholderTextColor={'#000'}
        />
        <TextInput
          style={style.input}
          placeholder="Mobile no."
          keyboardType="numeric"
          placeholderTextColor={'#000'}
        />
      </View>

      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={style.Buttn}>
          <Text style={{color: '#fff'}}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;

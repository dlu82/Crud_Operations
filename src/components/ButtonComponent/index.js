import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const index = ({item, Name, didTapon}) => {
  const navigation = useNavigation();

  // const deleteAlert = () => {
  //   Alert.alert('Delete', 'Are you sure you want to delete?', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel'),
  //       style: 'cancel',
  //     },
  //     {text: 'OK', onPress: () => deleteTask(item)},
  //   ]);
  // };

  return (
    <TouchableOpacity
      onPress={didTapon}
      style={{
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
      }}>
      <Text style={{}}>{Name}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({});

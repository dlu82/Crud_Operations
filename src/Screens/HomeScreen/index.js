import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import Header from '../../components/MainHeader';
import UserList from '../../components/UserList';
import AddBttn from '../../components/AddComponent';

const index = () => {
  const navigation = useNavigation();
  const [apiData, setApiDATA] = useState(0);
  useEffect(() => {
    getPostFromApi();
  }, []);

  const getPostFromApi = async () => {
    console.log('CHECK ========>');

    try {
      const res = await fetch('http://192.168.1.152:3000/posts');
      let response = await res.json();
      console.log('CHECK ========>', response);
      setApiDATA(response);
    } catch (error) {
      console.log(error, '===');
    }
  };

  return (
    <View style={style.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={apiData}
          renderItem={({item}) => (
            <UserList
              item={item}
              didPress={() => navigation.navigate('EditScreen', {params: item})}
            />
          )}
        />
      </ScrollView>
      <AddBttn />
    </View>
  );
};
export default index;

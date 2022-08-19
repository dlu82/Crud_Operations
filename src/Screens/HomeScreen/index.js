import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';
import Header from '../../components/MainHeader';
import UserList from '../../components/UserList';
import AddBttn from '../../components/AddComponent';

import {getApiFunction} from '../../store/slices/jsonSlice';
import {deleteApiFunction} from '../../store/slices/jsonSlice';
import {useDispatch, useSelector} from 'react-redux';

const index = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch({});
  const {apiData} = useSelector(state => state.jsonType);

  //Live refreshing
  const resId = route?.params?.ID ? route?.params?.ID : null;

  //USeState
  // const [apiData, setApiDATA] = useState(0);
  const [stdId, setStdId] = useState(
    route?.params?.ID ? route?.params?.ID : null,
  );

  useEffect(() => {
    setStdId(route?.params?.ID);
  }, [route?.params?.ID]);

  // useEffect(() => {
  //   getPostFromApi();
  // }, [stdId]);

  useEffect(() => {
    dispatch(getApiFunction());
    // demoAPI();
  }, [stdId]);

  // const getPostFromApi = async () => {
  //   console.log('CHECK ========>');
  //   try {
  //     const res = await fetch('http://192.168.1.152:8000/posts');
  //     let response = await res.json();
  //     console.log('CHECK ========>', response);
  //     setApiDATA(response);
  //   } catch (error) {
  //     console.log(error, '===');
  //   }
  // };

  //Delete function API calling
  const onDeletePressed = async item => {
    // console.log('STD_ID===', item);
    const resultAction = await dispatch(deleteApiFunction(item.id));
    if (deleteApiFunction.fulfilled.match(resultAction)) {
      dispatch(getApiFunction());
    }
  };
  // try {
  //   const res = await fetch('http://192.168.1.152:8000/posts/' + item.id, {
  //     method: 'DELETE',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     // body: JSON.stringify(payload),
  //   });
  //   let response = await res.json();
  //   console.log('DELETING ========>', response);
  //   setStdId(2000);
  //   navigation.navigate('HomeScreen');
  //   // setApiDATA(response);
  // } catch (error) {
  //   console.log(error, '===');
  // }
  //};
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'#000'} />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          contentContainerStyle={{marginBottom: 70}}
          data={apiData}
          renderItem={({item}) => (
            <UserList
              item={item}
              didPress={() => navigation.navigate('EditScreen', {params: item})}
              //item Passing
              onDeletePressed={() => onDeletePressed(item)}
            />
          )}
        />
      </ScrollView>
      <AddBttn Pressed={() => navigation.navigate('AddScreen')} />
    </View>
  );
};
export default index;

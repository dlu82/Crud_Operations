import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  PermissionsAndroid,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';

import image from '../../constants/images';
import style from './style';

const cameraOptions = [
  {
    title: 'Take Image',
    type: 'capture',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
  {
    title: 'Select Image',
    type: 'library',
    options: {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    },
  },
];

const index = ({}) => {
  const navigation = useNavigation();

  //useStates..
  const [modalVisible, setModalVisible] = useState(false);
  const [isImage, SetImage] = useState('');
  const [stdName, setstdName] = useState('');
  const [stddetails, setstdDetails] = useState('');
  const [stdmail, setstdMail] = useState('');
  const [stdMob, setstdMob] = useState('');

  //Camera Permission & Library Funnction
  const onGallaryUpload = () => {
    launchImageLibrary(cameraOptions, response => {
      console.log('RESPONSE===>', response);
      if (!response.didCancel) {
        let data = response.assets[0];
        SetImage(data.uri);
        setModalVisible(false);
      }
    });
  };
  const onPhotoUpload = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        launchCamera(cameraOptions, response => {
          console.log('RESPONSE===>', response);
          if (!response.didCancel) {
            let data = response.assets[0];
            SetImage(data.uri);
            setModalVisible(false);
          }
          // } else {
          // } //setImageURL(response.assets[0].fileName);
        });
      } else {
        console.log('Camera permission denied');
        Linking.openSettings();
      }
    } catch (err) {
      console.warn(err);
    }
    // const granted = await PermissionsAndroid.request()
  };

  //Update function API calling
  const onAdd = async () => {
    const payload = {
      name: stdName,
      details: stddetails,
      mail: stdmail,
      Mob: stdMob,
      Image_uri: isImage,
    };

    // console.log('kuyfg===', payload);

    try {
      const res = await fetch('http://192.168.1.152:3000/posts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      let response = await res.json();
      console.log('ADDING ========>', response);
      navigation.navigate('HomeScreen', {ID: response?.id});
      // setApiDATA(response);
    } catch (error) {
      console.log(error, '===');
    }
  };

  return (
    <View style={style.container}>
      {/* Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        isVisible={modalVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => setModalVisible(false)}>
        <View style={style.modalCont}>
          <Pressable onPress={onPhotoUpload}>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
              <Image source={image.Lens} style={{width: 20, height: 20}} />
              <Text style={{color: '#000', marginLeft: 10}}>Take One</Text>
            </View>
          </Pressable>

          <View
            style={{
              width: 150,
              height: 1,
              backgroundColor: '#263238',
              margin: 5,
            }}
          />
          <Pressable onPress={onGallaryUpload}>
            <View style={{flexDirection: 'row', marginHorizontal: 10}}>
              <Image source={image.Gallery} style={{width: 20, height: 20}} />
              <Text style={{color: '#000', marginLeft: 10}}>
                Take From Library
              </Text>
            </View>
          </Pressable>
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <Pressable
            style={style.profilePic}
            onPress={() => setModalVisible(true)}>
            <ImageBackground
              source={{uri: isImage}}
              // source={isImage}
              style={{width: 100, height: 100}}
              imageStyle={{borderRadius: 50}}>
              <Image source={image.Camera} style={style.camera} />
            </ImageBackground>
          </Pressable>
          <TextInput
            style={style.input}
            placeholder="Name"
            placeholderTextColor={'#000'}
            onChangeText={text => setstdName(text)}
            value={stdName}
          />
          <TextInput
            style={style.input}
            placeholder="Place"
            keyboardType="qwerty"
            placeholderTextColor={'#000'}
            onChangeText={text => setstdDetails(text)}
            value={stddetails}
          />
          <TextInput
            style={style.input}
            placeholder="E-mail"
            keyboardType="email-address"
            placeholderTextColor={'#000'}
            onChangeText={text => setstdMail(text)}
            value={stdmail}
          />
          <TextInput
            style={style.input}
            placeholder="Mobile no."
            keyboardType="numeric"
            placeholderTextColor={'#000'}
            onChangeText={text => setstdMob(text)}
            value={stdMob}
          />
        </View>

        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={onAdd} style={style.Buttn}>
            <Text style={{color: '#fff'}}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

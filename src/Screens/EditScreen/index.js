import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
  StatusBar,
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

import image from '../../constants/images';
import style from './styles';

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

const index = ({item, route}) => {
  // console.log('rooot===>', route?.params?.params.name);
  const stdData = route?.params?.params;

  const navigation = useNavigation();

  //useStates
  // console.log('dgfkaghjv=====>', item);
  const [modalVisible, setModalVisible] = useState(false);
  const [isImage, SetImage] = useState(
    route?.params?.params.Image_uri ? route?.params?.params.Image_uri : '',
  );
  const [stdName, setstdName] = useState(route?.params?.params.name);
  const [stddetails, setstdDetails] = useState(route?.params?.params.details);
  const [stdmail, setstdMail] = useState(route?.params?.params.mail);
  const [stdMob, setstdMob] = useState(route?.params?.params.Mob);
  //Camera Permission & library function
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
    // console.log('RESPONSE===>');
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
  const onUpdate = async () => {
    const payload = {
      name: stdName,
      details: stddetails,
      mail: stdmail,
      Mob: stdMob,
      id: route.params.params.id,
      Image_uri: isImage,
    };

    // console.log('kuyfg===', payload);

    try {
      const res = await fetch(
        'http://192.168.1.152:3000/posts/' + route?.params?.params?.id,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );
      let response = await res.json();
      console.log('EDITING ========>', response);
      navigation.navigate('HomeScreen', {ID: response?.id});
      // setApiDATA(response);
    } catch (error) {
      console.log(error, '===');
    }
  };

  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'#B3E5FC'} />
      <Pressable style={style.profilePic} onPress={() => setModalVisible(true)}>
        <ImageBackground
          source={{uri: isImage ? isImage : route?.params?.params.Image_uri}}
          style={{width: 100, height: 100}}
          imageStyle={{borderRadius: 50}}>
          <Image source={image.Camera} style={style.camera} />
        </ImageBackground>
      </Pressable>
      <View style={{top: 50}}>
        <TextInput
          style={style.input}
          placeholder="Name"
          keyboardType="qwerty"
          placeholderTextColor={'#000'}
          onChangeText={text => setstdName(text)}
          value={stdName}
        />
        <TextInput
          style={style.input}
          placeholder={'Place'}
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
        <TouchableOpacity style={style.bttn} onPress={onUpdate}>
          <Text style={{color: '#000'}}>Update</Text>
        </TouchableOpacity>
      </View>

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
    </View>
  );
};
export default index;

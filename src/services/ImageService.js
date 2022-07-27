// import React from 'react';
// import {PermissionsAndroid, Linking, Alert, Platform} from 'react-native';
// import {toastAlert} from '../utils';
// import Permissions, {PERMISSIONS, RESULTS} from 'react-native-permissions';

// export const checkCameraPermission = async () => {
//   try {
//     if (Platform.OS === 'ios') {
//       const grand_ios = await Permissions.requestMultiple([
//         PERMISSIONS.IOS.CAMERA,
//       ]);
//       if (grand_ios['ios.permission.CAMERA'] === 'granted') {
//         return true;
//       } else {
//         toastAlert(
//           'required permissions is denied by user',
//           (children = {
//             action: {
//               text: 'Settings',
//               textColor: 'green',
//               onPress: () => openSetting(),
//             },
//           }),
//         );
//       }
//     } else {
//       const grants = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//       ]);
//       if (
//         grants['android.permission.CAMERA'] ===
//         PermissionsAndroid.RESULTS.GRANTED
//       ) {
//         return true;
//       } else {
//         toastAlert(
//           'required permissions is denied by user',
//           (children = {
//             action: {
//               text: 'Settings',
//               textColor: 'green',
//               onPress: () => openSetting(),
//             },
//           }),
//         );
//       }
//     }
//   } catch (error) {
//     return false;
//   }
// };

// const openSetting = () => {
//   Linking.openSettings().catch(() => {
//     Alert.alert('Unable to open settings');
//   });
// };

import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3E5FC',
  },
  profilePic: {
    width: 100,
    height: 100,
    top: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  bttn: {
    width: 90,
    height: 30,
    backgroundColor: '#B0BEC5',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  modalCont: {
    backgroundColor: '#BDBDBD',
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderRadius: 15,
    width: 220,
    padding: 15,
  },
});
export default style;

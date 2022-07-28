import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87bfc9',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
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
  modalCont: {
    backgroundColor: '#BDBDBD',
    alignItems: 'flex-start',
    alignSelf: 'center',
    borderRadius: 15,
    width: 220,
    padding: 15,
  },
  Buttn: {
    width: 80,
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default style;

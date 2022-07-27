import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    width: 180,
    marginLeft: 15,
    justifyContent: 'center',
  },
  Buttn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
export default style;

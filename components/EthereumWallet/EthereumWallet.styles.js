import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  Container: {
    flex: 1,
    padding: 16,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Title: {
    fontSize: 25,
  },
  InputContainer: {
    paddingVertical: 15,
  },
  SubTitle: {
    fontSize: 15,
    color: 'black',
    paddingVertical: 5,
  },
  TextInput: {
    width: Dimensions.get('window').width - 70,
    borderColor: 'grey',
    borderWidth: 2,
    backgroundColor: 'white',
    padding: 5,
  },
  Button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    backgroundColor: 'white',
  },
  ButtonText: {
    fontSize: 15,
    color: 'grey',
  },
});

import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {addContact} from '../redux-store/slices/contactSlice';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
  },

  inputViewStyle: {
    margin: 10,
  },

  textInputStyle: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },

  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  titleStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export const AddNewContact = ({navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleNameChange = newName => {
    setName(newName);
  };

  const handlePhoneNumberChange = newPhoneNumber => {
    setPhoneNumber(newPhoneNumber);
  };

  const handleCityChange = newCity => {
    setCity(newCity);
  };

  const handleNewContactAdd = () => {
    dispatch(addContact({name: name, phone: phoneNumber, city: city}));
    setName('');
    setCity('');
    setPhoneNumber('');
    navigation.navigate('Contacts');
  };

  return (
    <View style={styles.center}>
      <Text style={styles.titleStyle}> New Contact </Text>

      <View style={styles.inputViewStyle}>
        <Text style={styles.textStyle}>Name</Text>
        <TextInput
          style={styles.textInputStyle}
          value={name}
          onChangeText={handleNameChange}
        />
      </View>

      <View style={styles.inputViewStyle}>
        <Text style={styles.textStyle}> Contact </Text>
        <TextInput
          style={styles.textInputStyle}
          value={phoneNumber}
          inputMode={'tel'}
          onChangeText={handlePhoneNumberChange}
        />
      </View>

      <View style={styles.inputViewStyle}>
        <Text style={styles.textStyle}> City </Text>
        <TextInput
          style={styles.textInputStyle}
          value={city}
          onChangeText={handleCityChange}
        />
      </View>

      <View style={styles.inputViewStyle}>
        <Button title={'Add'} onPress={handleNewContactAdd} color={'black'} />
      </View>
    </View>
  );
};

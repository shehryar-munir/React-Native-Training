import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: '400',
    fontSize: 30,
    margin: 5,
    color: 'white',
  },

  viewStyle: {
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export const Item = ({navigation, name, phoneNumber, city}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('SingleContactDetail', {
          name: name,
          phoneNumber: phoneNumber,
          city: city,
        })
      }>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> {name} </Text>
        <Text style={styles.textStyle}> {phoneNumber} </Text>
      </View>
    </TouchableOpacity>
  );
};

import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    padding: 10,
  },
});

export const GreetingComponent = ({navigation, name}) => {
  const [newName, setNewName] = useState('');

  const handleTextChange = newText => {
    setNewName(newText);
  };

  return (
    <View style={styles.center}>
      <Text style={styles.textStyle}>Salam {name} </Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={handleTextChange}
        value={newName}
        placeholder={'Enter new name....'}
      />

      <Button
        title={'Go Back!'}
        onPress={() => navigation.navigate('Home', {name: newName})}
      />
    </View>
  );
};

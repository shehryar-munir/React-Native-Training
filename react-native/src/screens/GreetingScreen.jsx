import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

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

export const GreetingScreen = ({navigation, route}) => {
  const [newName, setNewName] = useState('');

  const handleGoBack = () => {
    navigation.navigate('Home', {name: newName, post: newName});
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <Button
            onPress={() =>
              navigation.navigate('Home', {
                name: newName,
                post: newName,
              })
            }
            title={'Go Back'}
          />
        );
      },
    });
  }, [navigation, newName]);

  const handleTextChange = newText => {
    setNewName(newText);
  };

  return (
    <View style={styles.center}>
      <Text style={styles.textStyle}>Salam {route.params.name} </Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={handleTextChange}
        value={newName}
        placeholder={'Enter new name....'}
      />

      <Button title={'Go Back!'} onPress={handleGoBack} />
    </View>
  );
};

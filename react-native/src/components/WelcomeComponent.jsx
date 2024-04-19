import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

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

export const WelcomeComponent = ({navigation, initialName}) => {
  const [name, setName] = useState(initialName);

  const handleTextChange = newText => {
    setName(newText);
  };

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  return (
    <View style={styles.center}>
      <Text style={styles.textStyle}> Welcome {initialName}! </Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={handleTextChange}
        value={name}
        placeholder={'Enter your name... '}
      />
      <Button
        title={'Greet me!'}
        onPress={() => navigation.navigate('Greet', {name: name})}
      />
    </View>
  );
};

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

export const HomeScreen = ({navigation, route}) => {
  const [name, setName] = useState(route.params?.name);

  const handleTextChange = newText => {
    setName(newText);
  };

  useEffect(() => {
    setName(route.params?.name);
  }, [route.params?.name]);

  return (
    <View style={styles.center}>
      <Text style={styles.textStyle}> Welcome {route.params?.name}! </Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={handleTextChange}
        value={name}
        placeholder={'Enter your name... '}
      />

      <Button
        title={'Greet me!'}
        onPress={() => navigation.navigate('Greeting', {name: name})}
      />
    </View>
  );
};

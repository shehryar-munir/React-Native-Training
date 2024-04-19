import React from 'react';
import {HomeScreen} from './HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GreetingScreen} from './GreetingScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name={'Home'} component={HomeScreen} />

        <Stack.Screen name={'Greeting'} component={GreetingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

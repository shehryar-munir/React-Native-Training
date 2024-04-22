import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SingleContactDetail} from './SingleContactDetail';
import {ContactList} from './ContactList';

const Stack = createNativeStackNavigator();

export const Contacts = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={'Contacts'}>
      <Stack.Screen
        options={{headerShown: false}}
        name={'Contacts'}
        component={ContactList}
      />
      <Stack.Screen
        name={'SingleContactDetail'}
        component={SingleContactDetail}
        options={{title: 'Details', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

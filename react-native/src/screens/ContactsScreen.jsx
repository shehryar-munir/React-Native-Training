import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Contacts} from '../components/Contacts';
import {AddNewContact} from '../components/AddNewContact';

const Tab = createBottomTabNavigator();

export const ContactsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Contacts'} component={Contacts} />
      <Tab.Screen name={'New Contact'} component={AddNewContact} />
    </Tab.Navigator>
  );
};

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ContactList} from '../components/ContactList';
import {SettingsScreen} from './SettingsScreen';

const Tab = createBottomTabNavigator();

export const ContactsScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Contacts'} component={ContactList} />
        <Tab.Screen name={'Settings'} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

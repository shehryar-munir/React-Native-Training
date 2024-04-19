import React from 'react';
import {StackNavigation} from './src/screens/StackNavigation';
import {BottomNavigation} from './src/screens/BottomNavigation';
import DrawerNavigation from './src/screens/DrawerNavigation';
import 'react-native-gesture-handler';
import {ContactsScreen} from './src/screens/ContactsScreen';

const App = () => {
  // return <StackNavigation />;
  // return <BottomNavigation />;
  // return <DrawerNavigation />;
  return <ContactsScreen />;
};

export default App;

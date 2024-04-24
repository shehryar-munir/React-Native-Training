import React from 'react';
import 'react-native-gesture-handler';
import {ContactsScreen} from './src/screens/ContactsScreen';
import {Provider} from 'react-redux';
import store from './src/redux-store/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Lists} from './src/components/Lists';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <Provider store={store}>
    //   <NavigationContainer>
    //     <Stack.Navigator screenOptions={{headerShown: false}}>
    //       <Stack.Screen name={'Main'} component={ContactsScreen} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </Provider>
    <Lists />
  );
};

export default App;

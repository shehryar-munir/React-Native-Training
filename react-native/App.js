import React from 'react';
import 'react-native-gesture-handler';
import {ContactsScreen} from './src/screens/ContactsScreen';
import {Provider} from 'react-redux';
import store from './src/redux-store/store';

const App = () => {
  return (
    <Provider store={store}>
      <ContactsScreen />
    </Provider>
  );
};

export default App;

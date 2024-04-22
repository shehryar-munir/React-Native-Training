import React from 'react';
import {FlatList} from 'react-native';
import {Item} from './Item';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SingleContactDetail} from './SingleContactDetail';
const data = [
  {
    name: 'Ahmed',
    phone: '+92 332 4133761',
    city: 'Lahore',
  },
  {
    name: 'Fatima',
    phone: '+92 332 4133762',
    city: 'Karachi',
  },
  {
    name: 'Ali',
    phone: '+92 332 4133763',
    city: 'Islamabad',
  },
  {
    name: 'Ayesha',
    phone: '+92 332 4133764',
    city: 'Faisalabad',
  },
  {
    name: 'Sana',
    phone: '+92 332 4133765',
    city: 'Multan',
  },
  {
    name: 'Bilal',
    phone: '+92 332 4133766',
    city: 'Rawalpindi',
  },
  {
    name: 'Zainab',
    phone: '+92 332 4133767',
    city: 'Lahore',
  },
];

const Stack = createNativeStackNavigator();

const List = ({navigation}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Item
          name={item.name}
          phoneNumber={item.phone}
          navigation={navigation}
        />
      )}
    />
  );
};

export const ContactList = () => {
  return (
    <Stack.Navigator initialRouteName={'Contacts'}>
      <Stack.Screen
        options={{headerShown: false}}
        name={'Contacts'}
        component={List}
      />
      <Stack.Screen
        name={'SingleContactDetail'}
        component={SingleContactDetail}
        options={({route}) => ({title: 'Details'})}
      />
    </Stack.Navigator>
  );
};

import React from 'react';
import {FlatList} from 'react-native';
import {Item} from './Item';

const data = [
  {
    name: 'Burak',
    phone: '+92 332 4133764',
    city: 'Lahore',
  },
  {
    name: 'Burak',
    phone: '+92 332 4133764',
    city: 'Lahore',
  },
  {
    name: 'Burak',
    phone: '+92 332 4133764',
    city: 'Lahore',
  },
  {
    name: 'Burak',
    phone: '+92 332 4133764',
    city: 'Lahore',
  },
  {
    name: 'Burak',
    phone: '+92 332 4133764',
    city: 'Lahore',
  },
  {
    name: 'Burak',
    phone: '+92 332 4133764',
    city: 'Lahore',
  },
  {
    name: 'Burak',
    phone: '+92 332 4133764',
    city: 'Lahore',
  },
];

export const ContactList = () => {
  return (
    <FlatList data={data} renderItem={({item}) => <Item name={item.name} />} />
  );
};

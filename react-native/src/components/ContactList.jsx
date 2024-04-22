import {FlatList} from 'react-native';
import {Item} from './Item';
import React from 'react';
import {useSelector} from 'react-redux';

export const ContactList = ({navigation, route}) => {
  const data = useSelector(state => state.contacts.data);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <Item
          name={item.name}
          phoneNumber={item.phone}
          city={item.city}
          navigation={navigation}
        />
      )}
    />
  );
};

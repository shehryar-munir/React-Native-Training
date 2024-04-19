import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  itemViewStyles: {
    fontSize: 40,
    alignSelf: 'center',
    margin: 10,
  },
});

const ItemView = ({name}) => {
  return <Text style={styles.itemViewStyles}> {name} </Text>;
};

const Names = () => {
  const data = [
    {
      id: 1,
      name: 'Burak',
    },
    {
      id: 2,
      name: 'Ali',
    },
    {
      id: 3,
      name: 'Bin',
    },
    {
      id: 4,
      name: 'Hamza',
    },
    {
      id: 5,
      name: 'Saleem',
    },
    {
      id: 6,
      name: 'Haider',
    },
    {
      id: 7,
      name: 'Tayyab',
    },
    {
      id: 8,
      name: 'Zohair',
    },
    {
      id: 9,
      name: 'Kasim',
    },
    {
      id: 10,
      name: 'Kashif',
    },
    {
      id: 11,
      name: 'Hashim',
    },
  ];

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemView name={item.name} />}
      />
    </SafeAreaView>
  );
};

const Settings = () => {
  return <Text>This is Settings Page</Text>;
};

export const BottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Names'} component={Names} />
        <Tab.Screen name={'Settings'} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

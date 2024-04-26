import React, {useEffect, useState} from 'react';
import {RefreshControl, SectionList, Text, TextInput, View} from 'react-native';
import {usePullToRefresh} from '../hooks/usePullToRefresh';

const sectionListData = [
  {
    title: 'Main Dishes',
    data: ['PIZZA', 'SANDWICH', 'BURGER'],
  },
  {
    title: 'Side Dishes',
    data: ['French fries', 'Pasta', 'Lasagna'],
  },
  {
    title: 'Beverages',
    data: ['COLA', 'SPRITE', 'FANTA'],
  },
];

export const SectionListComponent = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(sectionListData);
  const {refreshing, onRefreshHandler} = usePullToRefresh({
    onRefreshFunction() {
      return sectionListData;
    },
  });
  useEffect(() => {
    if (search === '') {
      setData(sectionListData);
    }
  }, [data, search]);

  const handleSearch = text => {
    setSearch(text);
    const filteredData = data.filter(item => {
      const itemTitle = item.title.toUpperCase();
      const searchText = search.toUpperCase();
      return itemTitle.indexOf(searchText) > -1;
    });
    setData(filteredData);
  };

  return (
    <View>
      <TextInput
        placeholder={'Enter type of dishes you want to see..'}
        onChangeText={handleSearch}
      />

      <SectionList
        sections={data}
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => <Text>{title} </Text>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefreshHandler}
          />
        }
      />
    </View>
  );
};

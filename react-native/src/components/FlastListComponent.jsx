import {FlatList, RefreshControl, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {usePullToRefresh} from '../hooks/usePullToRefresh';

const flatListData = [
  {
    dishName: 'Pizza',
    price: 100,
  },
  {
    dishName: 'Sandwich',
    price: 200,
  },
  {
    dishName: 'Burger',
    price: 400,
  },
];

const RenderItem = ({dishName, price}) => {
  return (
    <View>
      <Text>Dish name: {dishName}</Text>
      <Text> Price: {price}</Text>
    </View>
  );
};

export const FlastListComponent = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(flatListData);
  const {refreshing, onRefreshHandler} = usePullToRefresh({
    onRefreshFunction() {
      return flatListData;
    },
  });
  useEffect(() => {
    const emptyText = () => {
      if (search === '') {
        setData(flatListData);
      }
    };
    emptyText();
  }, [data, search]);

  const handleSearch = text => {
    setSearch(text);

    const newData = data.filter(item => {
      const itemData = item.dishName.toUpperCase();
      const searchText = text.toUpperCase();
      return itemData.indexOf(searchText) > -1;
    });
    setData(newData);
  };

  return (
    <View>
      <TextInput
        placeholder={'Enter dish name..'}
        onChangeText={handleSearch}
        value={search}
      />
      <FlatList
        data={data}
        keyExtractor={item => item.dishName}
        renderItem={({item}) => (
          <RenderItem dishName={item.dishName} price={item.price} />
        )}
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

import React from 'react';

import {SectionListComponent} from './SectionListComponent';
import {FlastListComponent} from './FlastListComponent';
import {View} from 'react-native';

export const Lists = () => {
  return (
    <View>
      <SectionListComponent />
      <FlastListComponent />
    </View>
  );
};

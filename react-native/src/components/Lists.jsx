import React from 'react';

import {SectionListComponent} from './SectionListComponent';
import {FlastListComponent} from './FlastListComponent';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 150,
  },
});

export const Lists = () => {
  return (
    <View style={styles.center}>
      <SectionListComponent />
      {/*<FlastListComponent />*/}
    </View>
  );
};

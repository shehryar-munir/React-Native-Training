import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontWeight: '800',
    fontSize: 30,
  },
});

export const SingleContactDetail = ({navigation, route}) => {
  return (
    <View style={styles.center}>
      <Text style={styles.textStyle}> {route.params?.name} </Text>
      <Text style={styles.textStyle}> {route.params?.phoneNumber} </Text>
      <Text style={styles.textStyle}> {route.params?.city} </Text>
    </View>
  );
};

import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const Contributors = () => (
  <View style={styles.content}>
    <Text>Contributors Page</Text>
  </View>
);

export default Contributors;

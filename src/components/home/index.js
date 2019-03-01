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

export default function Home() {
  return (
    <View style={styles.content}>
      <Text>Home Page</Text>
    </View>
  );
}
Home.displayName = 'Home';

import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import PageHeader from './pageHeader';
import ListContainer from './listContainer';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
  }
});

export default function ContributorsView() {
  return (
    <View style={styles.content}>
      <PageHeader />
      <ListContainer style={styles.content}/>
    </View>
  );
}

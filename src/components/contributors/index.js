import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import PageHeader from './pageHeader';
import ListContainer from './listContainer';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
  }
});

export default class ContributorsView extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: true,
      isBloatedEcosystem: true
    };
  }

  render() {
    return (
      <View style={styles.content}>
        <PageHeader />
        <View style={styles.content}>
          { this.state.dataLoaded
            ? <ListContainer style={styles.content}/> : <Text>No Data Found</Text> }
        </View>
      </View>
    );
  }
}

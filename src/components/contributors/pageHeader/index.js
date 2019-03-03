import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';


const styles = StyleSheet.create({
  headerOuter: {
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  headerText: {
    fontSize: 24
  }
});

export default class PageHeader extends Component {
  constructor() {
    super();
    this.title = 'Project Contributors';
  }

  render() {
    return (
      <View style={styles.headerOuter}>
        <Text style={styles.headerText}>
          {this.title}
        </Text>
      </View>
    );
  }
}

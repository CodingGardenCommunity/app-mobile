import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';


const styles = StyleSheet.create({
  headerOuter: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 28
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

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import PageHeader from './pageHeader';
import ListContainer from './listContainer';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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


  // getData() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json)
  //     .then((data) => {
  //       this.setState({
  //         dataLoaded: true,
  //         contributorsData: JSON.parse(data)
  //       });
  //       console.log(this.state)
  //     });
  // }

  // asyncGetData() {
  //   fetch('https://github.com')
  //     .then(response => response.json)
  //     .then((data) => {
  //       this.setState({
  //         contributorsData: JSON.parse(data)
  //       });
  //       console.log(this.state);
  //     });
  // }

  render() {
    if (this.state.dataLoaded) {
      return (
        <View>
          <PageHeader />
          <View style={styles.content}>
            <ListContainer />
          </View>
        </View>
      );
    }
    return (
      <View>
        <PageHeader />
        <View style={styles.content}>
          <Text>Data goes here</Text>
        </View>
      </View>
    );
  }
}

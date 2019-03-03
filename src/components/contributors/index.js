import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import PageHeader from './pageHeader';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default class ContributorsView extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      contributorsData: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json)
      .then((data) => {
        this.setState({
          contributorsData: data
        });
      });
  }

  asyncGetData() {
    fetch('https://github.com')
      .then(response => response.json)
      .then((data) => {
        this.setState({
          contributorsData: data
        });
      });
  }

  render() {
    return (
      <View>
        <PageHeader />
        <View style={styles.content}>
          <Text>{JSON.stringify(this.state.contributorsData[0].name)}</Text>
        </View>
      </View>
    );
  }
}

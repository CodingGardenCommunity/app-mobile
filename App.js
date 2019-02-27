import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
    };
  }

  async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <Container style={styles.container}>
        <StatusBar />
        <Text>Welcome to the Coding Garden App</Text>
      </Container>
    );
  }
}

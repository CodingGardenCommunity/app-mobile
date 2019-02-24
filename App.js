import React, { Component } from 'react';
import { AppLoading, Font } from 'expo';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Text, View } from 'native-base';
import { Navbar, Pages } from './src/components/shared/navbar';
import Home from './src/components/home/home';
import Contributors from './src/components/contributors/contributors';
import FAQ from './src/components/faq/faq';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      page: Pages.HOME,
      fontsLoaded: false,
    };
    this.NavbarCallback = this.NavbarCallback.bind(this);
  }

  // eslint-disable-next-line
  async UNSAFE_componentWillMount() {
    /* eslint-disable global-require */
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    /* eslint-enable global-require */
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <Container style={styles.container}>
        <StatusBar />

        {(StatusBar.currentHeight) ? (
          <View style={{ height: StatusBar.currentHeight }} />
        ) : (null)}

        <View style={styles.content}>
          {this.RenderPage()}
        </View>

        <Navbar callback={this.NavbarCallback} />

      </Container >
    );
  }

  RenderPage() {
    switch (this.state.page) {
      case Pages.HOME:
        return <Home />;
      case Pages.CONTRIBUTORS:
        return <Contributors />;
      case Pages.FAQ:
        return <FAQ />;
      default:
        return (
          <Text>
            Error in RenderPage in App.js - An invalid page was attempting to be loaded
          </Text>
        );
    }
  }

  NavbarCallback(selectedPage) {
    this.setState({ page: selectedPage });
  }
}

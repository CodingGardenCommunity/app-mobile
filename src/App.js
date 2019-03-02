import React, { Component } from 'react';
import { registerRootComponent, AppLoading, Font } from 'expo';
import { StatusBar, StyleSheet } from 'react-native';
import { Container, Text, View } from 'native-base';
import Navbar from './components/shared/navbar';
import Home from './components/home';
import Contributors from './components/contributors';
import FAQ from './components/faq';
import Pages from './constants/pages';

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

function RenderPage(page) {
  switch (page) {
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

export class App extends Component {
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
    const { fontsLoaded, page } = this.state;

    if (!fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <Container style={styles.container}>
        <StatusBar />

        {(StatusBar.currentHeight) ? (
          <View style={{ height: StatusBar.currentHeight }} />
        ) : (null)}

        <View style={styles.content}>
          {RenderPage(page)}
        </View>

        <Navbar onButtonPress={this.NavbarCallback} currentPage={page} />

      </Container >
    );
  }

  NavbarCallback(selectedPage) {
    this.setState({ page: selectedPage });
  }
}

export default registerRootComponent(App);

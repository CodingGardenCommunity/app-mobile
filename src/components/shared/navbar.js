import React, { Component } from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Text, Footer, View } from 'native-base';

const iconImage = require('../../../assets/icon.png');

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonActiveText: {
    color: '#0098E8',
  },
  navButtonInactiveText: {
    color: '#000',
  },
  navImage: {
    width: 20,
    height: 20,
  }
});

export const Pages = {
  HOME: 0,
  CONTRIBUTORS: 1,
  FAQ: 2,
};

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: Pages.HOME,
    };
  }

  render() {
    return (
      <Footer style={styles.footer}>
        <TouchableHighlight style={styles.navButton} underlayColor='#eee' onPress={() => { this.handelButtonPress(Pages.HOME); }}>
          <View style={styles.navButton}>
            {/* TODO: Placeholder Asset!! */}

            <Image style={styles.navImage} source={iconImage} />
            <Text style={
              (this.state.page === Pages.HOME) ? (
                styles.navButtonActiveText
              ) : styles.navButtonInactiveText
            }>
              Home
            </Text>

          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.navButton} underlayColor='#eee' onPress={() => { this.handelButtonPress(Pages.CONTRIBUTORS); }}>
          <View style={styles.navButton}>
            {/* TODO: Placeholder Asset!! */}

            <Image style={styles.navImage} source={iconImage} />
            <Text style={
              (this.state.page === Pages.CONTRIBUTORS) ? (
                styles.navButtonActiveText
              ) : styles.navButtonInactiveText
            }>
              Contributors
            </Text>

          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.navButton} underlayColor='#eee' onPress={() => { this.handelButtonPress(Pages.FAQ); }}>
          <View style={styles.navButton}>
            {/* TODO: Placeholder Asset!! */}

            <Image style={styles.navImage} source={iconImage} />
            <Text style={
              (this.state.page === Pages.FAQ) ? (
                styles.navButtonActiveText
              ) : styles.navButtonInactiveText
            }>
              FAQ
            </Text>

          </View>
        </TouchableHighlight>

      </Footer>
    );
  }

  handelButtonPress(selectedPage) {
    this.setState({ page: selectedPage });
    this.props.callback(selectedPage);
  }
}

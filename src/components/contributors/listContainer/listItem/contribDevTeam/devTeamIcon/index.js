import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  teamIcon: {
    width: 30,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    borderColor: '#212121',
    borderWidth: 1
  },
});

export default class DevTeamIcon extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { team } = this.props;
    return (
      <View
        style={[styles.teamIcon, { alignItems: 'center', justifyContent: 'center' }]}>
          <Text>{ team }</Text>
      </View>
    );
  }
}

DevTeamIcon.propTypes = {
  team: propTypes.number,
  index: propTypes.number,
};

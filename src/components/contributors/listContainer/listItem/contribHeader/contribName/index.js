import React from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    flex: 1
  },
});

export default function contributorName(props) {
  return <Text numberOfLines={1} style={styles.name}>{ props.name }</Text>;
}

contributorName.propTypes = {
  name: propTypes.string
};

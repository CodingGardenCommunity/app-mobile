import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  name: {
    fontSize: 20
  },
});

function contributorName(props) {
  return <Text style={styles.name}>{ props.name }</Text>;
}

contributorName.propTypes = {
  name: PropTypes.string
};

export default contributorName;

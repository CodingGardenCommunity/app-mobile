import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Icon } from 'native-base';

const styles = StyleSheet.create({
  profileIcon: {
    width: 24,
    height: 24,
    marginTop: 4,
    color: '#121212',
  }
});

export default function userProfileIcon(props) {
  const { uri } = props;
  return (
    <Icon
      style={styles.profileIcon}
      name="person"
      uri={uri}
    />
  );
}

userProfileIcon.propTypes = {
  uri: PropTypes.string,
};

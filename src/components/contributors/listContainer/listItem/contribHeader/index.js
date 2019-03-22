import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import ContributorName from './contribName';
import UserProfileImage from './userProfileIcon';

const styles = StyleSheet.create({
  headerOuter: {
    height: 30,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default function contributorHeader(props) {
  const { name, link } = props;

  const { headerOuter } = styles;
  return (
    <View style={ headerOuter }>
      <ContributorName name={ name } />
      <UserProfileImage link={ link } />
    </View>
  );
}

contributorHeader.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
};

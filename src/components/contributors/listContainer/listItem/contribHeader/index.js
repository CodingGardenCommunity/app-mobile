import React from 'react';
import { StyleSheet, View } from 'react-native';
import propTypes from 'prop-types';

import ContributorName from './contribName';
import UserProfileIcon from './userProfileIcon';

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
  const { name, github } = props;

  const { headerOuter } = styles;
  return (
    <View style={ headerOuter }>
      <ContributorName name={ name } />
      <UserProfileIcon github={ github } />
    </View>
  );
}

contributorHeader.propTypes = {
  name: propTypes.string,
  github: propTypes.string,
};

import React from 'react';
import propTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';

import DevTeamHeader from './devTeamHeader';
import DevTeamList from './devTeamsList';

const styles = StyleSheet.create({
  devTeamsOuter: {
    height: 70,
  },


});

export default function contributorDevTeams(props) {
  const { devTeams } = props;
  return (
    <View style={ styles.devTeamsOuter }>
      <DevTeamHeader />
      <DevTeamList devTeams={ devTeams } />
    </View>
  );
}

contributorDevTeams.propTypes = {
  devTeams: propTypes.array,
};

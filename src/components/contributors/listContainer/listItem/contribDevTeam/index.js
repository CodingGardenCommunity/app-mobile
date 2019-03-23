import React from 'react';
import propTypes from 'prop-types';
import {
  StyleSheet,
  View,
} from 'react-native';

import DevTeamHeader from './devTeamHeader';
import DevTeamList from './devTeamList';

const styles = StyleSheet.create({
  devTeamOuter: {
    height: 70,
  },


});

export default function contributorDevTeams(props) {
  const { teamIds } = props;
  return (
    <View style={styles.devTeamOuter}>
      <DevTeamHeader />
      <DevTeamList teamIds={teamIds} />
    </View>
  );
}

contributorDevTeams.propTypes = {
  teamIds: propTypes.array,
};

import React from 'react';
import { StyleSheet, View } from 'react-native';
import propTypes from 'prop-types';

import DevTeamIcon from '../devTeamIcon';

const styles = StyleSheet.create({
  devTeamList: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 5
  },
});

export default function devTeamList(props) {
  const { teamIds } = props;

  return (
    <View style={styles.devTeamList}>
    {
      teamIds.map((team, index) => <DevTeamIcon key={index} team={team} />)
    }
  </View>
  );
}

devTeamList.propTypes = {
  teamIds: propTypes.array,
};

import React from 'react';
import { StyleSheet, View } from 'react-native';
import propTypes from 'prop-types';

import DevTeamIcon from './devTeamIcon';

const styles = StyleSheet.create({
  devTeamsList: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 5,
    backgroundColor: '#cccccc',
  },
});

export default function devTeamsList(props) {
  const { devTeams } = props;

  return (
    <View style={styles.devTeamsList}>
    {
      devTeams.map((team, index) => <DevTeamIcon key={index} team={team} />)
    }
    </View>
  );
}

devTeamsList.propTypes = {
  devTeams: propTypes.array,
};

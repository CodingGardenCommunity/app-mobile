import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  devTeamList: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 5
  },
  teamIcon: {
    width: 30,
    height: 40,
    marginRight: 9,
    borderRadius: 20,
    borderColor: '#212121',
    borderWidth: 1
  },
});

export default function devTeamList(props) {
  const { teamIds } = props;

  return (
    <View style={styles.devTeamList}>
    {
      teamIds.map((team, index) => <View
        key={index}
        style={[styles.teamIcon, { alignItems: 'center', justifyContent: 'center' }]}>
          <Text>{ team }</Text>
      </View>)
    }
  </View>
  );
}

devTeamList.propTypes = {
  teamIds: propTypes.array,
};

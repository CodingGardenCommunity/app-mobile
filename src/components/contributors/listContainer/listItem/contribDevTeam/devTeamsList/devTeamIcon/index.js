import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  teamIcon: {
    width: 30,
    height: 40,
    borderRadius: 20,
    borderColor: '#212121',
    borderWidth: 1
  },
});

export default function DevTeamIcon(props) {
  const { id } = props.team;

  return (
    <View
      style={[styles.teamIcon, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text>{ id }</Text>
    </View>
  );
}

DevTeamIcon.propTypes = {
  team: propTypes.object,
  teamId: propTypes.string,
};

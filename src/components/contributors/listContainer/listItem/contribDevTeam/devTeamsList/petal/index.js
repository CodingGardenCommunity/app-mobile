import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  petalIcon: {
    width: 10,
    height: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 0,
    backgroundColor: '#1A675C',
    padding: 5
  }
});

export default function petalIcon(props) {
  const { id } = props.team;

  return (
    <View
      style={[styles.petalIcon, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text>{ id }</Text>
    </View>
  );
}

petalIcon.propTypes = {
  team: propTypes.object,
  teamId: propTypes.string,
};

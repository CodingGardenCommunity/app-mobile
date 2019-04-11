import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  devTeamHeader: {
    borderBottomWidth: 1,
    borderColor: '#121212',
    width: '100%'
  },
});

export default function devTeamHeader() {
  return <Text style={styles.devTeamHeader}>Develompent Teams</Text>;
}

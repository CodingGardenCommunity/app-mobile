import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  devTeamOuter: {
    height: 70,
  },
  devTeamHeader: {
    borderBottomWidth: 1,
    borderColor: '#121212'
  },
  devTeamList: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 5
  },
  teamIcon: {
    width: 30,
    height: 40,
    marginRight: 15,
    borderRadius: 20,
    borderColor: '#212121',
    borderWidth: 1
  },

});

export default function contributorDevTeams(props) {
  const { teamIds } = props;

  return (
    <View style={styles.devTeamOuter}>
      <Text style={styles.devTeamHeader}>
        Development Teams
      </Text>
      <View style={styles.devTeamList}>
        {
          teamIds.map((team, index) => <View
          key={index}
          style={[styles.teamIcon, { alignItems: 'center', justifyContent: 'center' }]}>
            <Text>{ team }</Text>
          </View>)
        }
      </View>
    </View>
  );
}

contributorDevTeams.propTypes = {
  teamIds: PropTypes.array,
};

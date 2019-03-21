import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  devTeamHeader: {
    
  },
  teamIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    borderColor: '#212121',
    borderWidth: 1
  },

})

export default function contribDevTeam(props) {
  const { teamIds } = props;

  return (
    <View style={{ backgroundColor: '#ccc', height: 60 }}>
      <Text>Development Teams</Text>
      <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        {
          teamIds.map((team, index) => <View
          key={index}
          style={[styles.teamIcon, { alignItems: 'center', justifyContent: 'center' }]}>
            <Text>{ team }</Text>
          </View>)
        }
      </View>
    </View>
  )
}

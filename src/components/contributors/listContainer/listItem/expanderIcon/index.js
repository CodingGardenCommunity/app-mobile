import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'native-base';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  expanderOuter: {
    width: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  expanderIcon: {
    width: 18,
    height: 24,
    color: '#121212',
  }
});

export default function expanderIcon(props) {
  const { isExpanded, toggleExpanded } = props;

  return (
    <View style={ styles.expanderOuter } onPress={ toggleExpanded }>
      {
        isExpanded
          ? <Icon
              style={ styles.expanderIcon }
              name="arrow-down"
            />
          : <Icon
              style={ styles.expanderIcon }
              name="arrow-up"
            />
      }
    </View>
  );
}

expanderIcon.propTypes = {
  toggleExpanded: propTypes.func,
  isExpanded: propTypes.bool
};

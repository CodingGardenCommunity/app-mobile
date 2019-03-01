import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Text, View } from 'native-base';
import Pages from '../../../constants/pages';

const styles = StyleSheet.create({
  navButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonActiveText: {
    color: '#0098E8',
  },
  navButtonInactiveText: {
    color: '#000',
  },
  navImage: {
    width: 20,
    height: 20,
  }
});

function handleButtonPress(selectedPage, onButtonPress) {
  onButtonPress(selectedPage);
}

export default function NavbarButton(props) {
  const {
    onButtonPress,
    iconImage,
    page,
    currentPage,
    text
  } = props;

  return (
    <TouchableHighlight style={styles.navButton} underlayColor='#eee' onPress={() => { handleButtonPress(page, onButtonPress); }}>
      <View style={styles.navButton}>

        <Image style={styles.navImage} source={iconImage} />
        <Text style={
          (currentPage === page) ? (styles.navButtonActiveText) : (styles.navButtonInactiveText)
        }>
          {text}
        </Text>

      </View>
    </TouchableHighlight >
  );
}

NavbarButton.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
  iconImage: PropTypes.number.isRequired,
  page: PropTypes.oneOf(Object.values(Pages)).isRequired,
  currentPage: PropTypes.oneOf(Object.values(Pages)).isRequired,
  text: PropTypes.string.isRequired
};

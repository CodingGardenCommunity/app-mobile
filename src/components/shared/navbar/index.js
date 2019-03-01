import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Footer } from 'native-base';
import NavbarButton from './navbarButton';
import Pages from '../../../constants/pages';

const iconImage = require('../../../../assets/icon.png');

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
  },
});

export default function Navbar(props) {
  const { onButtonPress, currentPage } = props;
  return (
    <Footer style={styles.footer}>

      <NavbarButton
        onButtonPress={onButtonPress}
        iconImage={iconImage}
        page={Pages.HOME}
        currentPage={currentPage}
        text="Home"
      />

      <NavbarButton
        onButtonPress={onButtonPress}
        iconImage={iconImage}
        page={Pages.CONTRIBUTORS}
        currentPage={currentPage}
        text="Contributors"
      />

      <NavbarButton
        onButtonPress={onButtonPress}
        iconImage={iconImage}
        page={Pages.FAQ}
        currentPage={currentPage}
        text="FAQ"
      />

    </Footer>
  );
}

Navbar.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
  currentPage: PropTypes.oneOf(Object.values(Pages)).isRequired,
};

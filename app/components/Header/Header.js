import React from 'react';
import PropTypes from 'prop-types';

import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('./images/gear.png')}
      />
    </TouchableOpacity>
  </View>
);

Header.propTypes = propTypes;

export default Header;

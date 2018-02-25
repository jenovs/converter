import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

const propTypes = {
  checkmark: PropTypes.bool,
  iconBackground: PropTypes.string,
  visible: PropTypes.bool,
};

const Icon = ({ checkmark, iconBackground, visible }) => {
  const iconStyles = [styles.icon];
  if (visible) {
    iconStyles.push(styles.iconVisible);
  }

  if (iconBackground) {
    iconStyles.push({ backgroundColor: iconBackground });
  }

  return (
    <View style={iconStyles}>
      {checkmark ? (
        <Image
          style={styles.checkIcon}
          resizeMode="contain"
          source={require('./images/check.png')}
        />
      ) : null}
    </View>
  );
};

Icon.propTypes = propTypes;

export default Icon;

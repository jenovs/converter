import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import Icon from './Icon';

import styles from './styles';

const propTypes = {
  customIcon: PropTypes.element,
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
};

const ListItem = ({
  checkmark = true,
  customIcon = null,
  onPress,
  selected = false,
  text,
  visible = true,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = propTypes;

export default ListItem;

import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';

import styles from './styles';

const propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  editable: PropTypes.bool,
};

const defaultProps = {
  editable: true,
};

const InputWithButton = props => {
  const { buttonText, editable = true, onPress } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  const containerStyles = [styles.container];
  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={onPress}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = propTypes;
InputWithButton.defaultProps = defaultProps;

export default InputWithButton;

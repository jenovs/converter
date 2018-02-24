import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const propTypes = {
  base: PropTypes.string.isRequired,
  conversionRate: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
  quote: PropTypes.string.isRequired,
};

const LastConverted = ({ base, conversionRate, date, quote }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of{' '}
    {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propTypes = propTypes;

export default LastConverted;

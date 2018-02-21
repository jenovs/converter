import React from 'react';
import stylesheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

stylesheet.build({
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $primaryBlue: '#4f6d7a',
  $white: '#fff',
});

export default () => <Home />;

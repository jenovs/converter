import React from 'react';
import stylesheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

stylesheet.build({
  $primaryBlue: '#4f6d7a',
});

export default () => <Home />;

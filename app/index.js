import React from 'react';
import stylesheet from 'react-native-extended-stylesheet';
// import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';

stylesheet.build({
  $border: '#e2e2e2',
  $darkText: '#343434',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $primaryBlue: '#4f6d7a',
  $white: '#fff',
});

// export default () => <Home />;
export default () => <CurrencyList />;

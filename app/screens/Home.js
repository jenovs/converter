import React from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { InputWithButton } from '../components/TextInput';
import { Logo } from '../components/Logo';

const TEMP_BASE_CURRENCY = 'BTC';
const TEMP_QUOTE_CURRENCY = 'EUR';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '9000';

class Home extends React.Component {
  handlePressBaseCurrency = () => {
    console.log('press base');
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
  };

  handleTextChange = text => {
    console.log('text changed', text);
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <View>
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            editable={false}
            onPress={this.handlePressQuoteCurrency}
            defaultValue={TEMP_QUOTE_PRICE}
          />
        </View>
      </Container>
    );
  }
}

export default Home;

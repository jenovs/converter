import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import { ClearButton } from '../components/Buttons';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { InputWithButton } from '../components/TextInput';
import { LastConverted } from '../components/Text';
import { Logo } from '../components/Logo';

const TEMP_BASE_CURRENCY = 'BTC';
const TEMP_QUOTE_CURRENCY = 'EUR';
const TEMP_BASE_PRICE = '1';
const TEMP_QUOTE_PRICE = '8045';
const TEMP_CONVERSION_RATE = 8045;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handlePressBaseCurrency = () => {
    console.log('press base');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handlePressOptions = () => {
    console.log('press options');
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote');
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
    });
  };

  handleSwapCurrency = () => {
    console.log('press swap currency');
  };

  handleTextChange = text => {
    console.log('text changed', text);
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handlePressOptions} />
        <KeyboardAvoidingView behavior="padding">
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
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_CONVERSION_DATE}
          />
          <ClearButton
            text="Reverse currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;

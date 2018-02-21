import { StyleSheet } from 'react-native';
import stylesheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default stylesheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  border: {
    backgroundColor: '$border',
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    height: INPUT_HEIGHT,
    justifyContent: 'center',
  },
  buttonText: {
    color: '$primaryBlue',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '$white',
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    height: INPUT_HEIGHT,
    marginVertical: 11,
    width: '90%',
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  input: {
    color: '$inputText',
    flex: 1,
    fontSize: 18,
    height: INPUT_HEIGHT,
    paddingHorizontal: 8,
  },
});

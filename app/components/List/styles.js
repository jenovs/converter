import stylesheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = stylesheet.create({
  $underlayColor: '$border',

  checkIcon: {
    width: 18,
  },
  icon: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  iconVisible: {
    backgroundColor: '$primaryBlue',
  },
  row: {
    alignItems: 'center',
    backgroundColor: '$white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  separator: {
    backgroundColor: '$border',
    flex: 1,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
  text: {
    color: '$darkText',
    fontSize: 16,
  },
});

export default styles;

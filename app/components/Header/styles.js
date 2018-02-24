import stylesheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

const styles = stylesheet.create({
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  container: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20,
    },
    '@media android': {
      paddingTop: StatusBar.currentHeight,
    },
  },
  icon: {
    width: 18,
  },
});

export default styles;

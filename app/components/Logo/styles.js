import { Dimensions } from 'react-native';
import stylesheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default stylesheet.create({
  backgroundImage: {
    alignItems: 'center',
    height: imageWidth,
    justifyContent: 'center',
    width: imageWidth,
  },
  container: {
    alignItems: 'center',
  },
  image: {
    width: imageWidth / 2,
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});

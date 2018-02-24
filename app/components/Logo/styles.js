import { Dimensions } from 'react-native';
import stylesheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default stylesheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  image: {
    width: '$largeImageSize',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});

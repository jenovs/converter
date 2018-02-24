import stylesheet from 'react-native-extended-stylesheet';

export default stylesheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    // backgroundColor: 'white',
    width: 19,
    marginRight: 11,
  },
  text: {
    color: '$white',
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 20,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

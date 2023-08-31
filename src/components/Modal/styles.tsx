import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    marginTop: '40%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    minHeight: 50,
    minWidth: 50,
    borderRadius: 10,
    maxWidth: 300,
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  iconTextWrapper: {alignItems: 'center'},
  textWrapper: {alignItems: 'center'},
  title: {
    marginBottom: 8,
    fontSize: 20,
    fontWeight: '600',
  },
  description: {marginBottom: 16, textAlign: 'center'},
  iconWrapper: {
    marginBottom: 8,
    width: 40,
    height: 40,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#818cf8',
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  iconWrapper: {
    width: 24,
    height: 24,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

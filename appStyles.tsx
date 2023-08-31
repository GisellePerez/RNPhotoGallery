import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  title: {
    marginTop: 26,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: '#6366f1',
  },
  buttonsWrapper: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
  },
  photo: {
    width: 186,
    height: 186,
  },
  columnWrapperStyle: {
    padding: 16,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  noItemsText: {
    paddingVertical: 30,
    textAlign: 'center',
  },
});

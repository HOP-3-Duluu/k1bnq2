import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    header_text: {
      color: '#072D4B',
      fontSize: 20,
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: 5,
      fontWeight: '700',
      lineHeight: 23,
    },
  },
  screenContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: '#F4F9F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_info: {
    marginTop: 20,
    borderTopColor: '#072D4B',
    borderTopWidth: 0.2,
    width: '100%',
    height: 70,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    text: {
      color: '#072D4B',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 22,
      opacity: 0.4,
    },
  },
  container: {
    width: '90%',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F4F9F8',
  },
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_area: {
    width: 300,
    height: 95,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '500',
    color: '#072D4B',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  data: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#072D4B',
    opacity: 0.6,
  },
  post_with_image: {
    width: 170,
    height: 70,
    display: 'flex',
    flexDirection: 'row',
  },
  bottom_data: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    height: 30,
    text: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 22,
      color: '#072D4B',
      opacity: 0.4,
    },
    dot: {
      width: 2,
      height: 2,
      backgroundColor: '#2F9FF8',
      opacity: 0.4,
      marginLeft: 9,
      marginRight: 8,
    },
  },
  image_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

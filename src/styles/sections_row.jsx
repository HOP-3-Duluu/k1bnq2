import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  selected_box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 6,
    paddingTop: 6,
    backgroundColor: '#2F9FF8',
    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.04)',
    borderRadius: 20,
    marginRight: 20,
    text: {
      color: '#ffffff',
    },
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 6,
    paddingTop: 6,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginRight: 20,
    text: {
      color: 'black',
    },
  },
  screenContainer: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    display: 'flex',
    marginTop: 15,
  },
});

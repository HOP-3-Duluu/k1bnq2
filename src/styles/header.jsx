import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screenContainer: {
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
    fontSize: 17,
  },
  left_side: {
    marginLeft: 10,
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  right_side: {
    width: 170,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 20,
  },
  menu: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  search: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  user: {
    marginRight: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

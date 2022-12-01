import react from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import HomeIcon from "../../assets/home.jsx"
import Svg, { Circle } from 'react-native-svg';

export const Side_bar_menu = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.icon_row}>
        
        <Text style={styles.switched_text}>Top Stories</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 30,
    fontSize: 15,
    color: '#072D4B',
  },
  switched_text: {
    color: '#2F9FF8',
  },
  icon: {
    color: '#072D4B',
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  icon_row: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    width: '70%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    height: '80px',
    width: '200px',
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

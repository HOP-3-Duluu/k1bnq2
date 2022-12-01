import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../../styles/header.jsx';

export const Header = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.left_side}>
        <Image style={styles.menu} source={require('../../assets/menu.png')} />
        <Image
          style={styles.logo}
          source={require('../../assets/little_logo.png')}
        />
      </View>
      <View style={styles.right_side}>
        <Image
          style={styles.search}
          source={require('../../assets/search.png')}
        />
        <Image style={styles.user} source={require('../../assets/user.png')} />
        <Text style={styles.text}>My Profile</Text>
      </View>
    </View>
  );
};

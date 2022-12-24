import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Header} from '../components/common';
import {Sections_row} from '../components/common/sections_row';
import {styles} from '../styles/home.jsx';
import {Post_data} from '../components/common/post_data';
import {SplashScreen} from '../components/common/splash_screen';
import {UseAsyncStorage} from '../useAsyncStorage/useAsyncStorage';
import {TestAnimation} from '../animation/testAnimation';
import {Box} from '../animation/box';
import {Test_gesture} from '../gesture-handler/test';
import {Data_of_post} from '../components/core/data_of_post';
import { Test_premission } from '../permission/test_premission';

export const Home = ({navigation}) => {
  return (
   <SafeAreaView>
     <ScrollView>
      <View style={styles.screenContainer}>
        <Header navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header.header_text}>Top Stories for you</Text>
          </View>
          <Sections_row />
          {Data_of_post.map(el => (
            <Post_data
              title={el.title}
              text={el.text}
              author={el.author}
              time={el.time}
              photo={el.photo}
            />
          ))}
          <View style={styles.bottom_info}>
            <Text style={styles.bottom_info.text}>© Aster News, 2021</Text>
            <Text style={styles.bottom_info.text}>Privacy Policy</Text>
            <Text style={styles.bottom_info.text}>Terms of Service</Text>
          </View>
        </View>
      </View>
    </ScrollView>
   </SafeAreaView>

    // <SafeAreaView>
    //   <Test_premission/>
    // </SafeAreaView>
    // <UseAsyncStorage/>
    // <TestAnimation/>
    // <SplashScreen/>
    // <Box/>
    // <Test_gesture/>
  );
};

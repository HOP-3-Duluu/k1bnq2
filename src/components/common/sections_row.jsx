import React, {useState} from 'react';
import {Text, View, ScrollView, Pressable} from 'react-native';
import {styles} from '../../styles/sections_row.jsx';

export const Sections_row = () => {
  const [number, setNumber] = useState(0);
  const sections = [
    'All',
    'Android',
    'Cricket',
    'iPhone',
    'Google',
    'Chrome',
    'Mobile',
  ];
  return (
    <View style={styles.screenContainer}>
      <ScrollView horizontal={true}>
        {sections.map((el, index) => {
          return (
            <Pressable
              key={index}
              index={index}
              style={number === index ? styles.selected_box : styles.box}
              onPress={() => {
                setNumber(index);
              }}>
              <Text
                style={
                  number === index ? styles.selected_box.text : styles.box.text
                }>
                {el}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

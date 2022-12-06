import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const IMAGE_DATA = [
  {
    url: 'https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/uncharted_onesheet_1400x2100_he.jpg?itok=dv7IpByX',
    name: 'uncharted',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYooUqqkAN6QwJMn9ZWc9n7bZmjbAvj3jRpg&usqp=CAU',
    name: 'idk2',
  },
];

const Boxes = ({url, name}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        blurRadius={10}
        style={styles.container}
        source={{
          url: url,
        }}>
        <Animated.Image
          style={styles.box}
          source={{
            url: url,
          }}
        />
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export const Box = () => {
  return (
    <View>
      <FlatList
        data={IMAGE_DATA}
        renderItem={({item}) => <Boxes url={item.url} name={item.name} />}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: 430,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  box: {
    width: 200,
    height: 350,
  },
  title: {
    fontSize: 30,
    color: '#008080',
    marginTop: 50,
  },
});

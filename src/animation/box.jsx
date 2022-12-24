import React, {useRef} from 'react';
import {
  Animated,
  Easing,
  FlatList,
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
    url: 'https://images.moviesanywhere.com/76cd3a853ffede1f5983f090839cacc8/8ca75d25-0bc2-4584-9d4c-3a381232c870.webp?h=375&resize=fit&w=250',
    name: 'parasite',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYooUqqkAN6QwJMn9ZWc9n7bZmjbAvj3jRpg&usqp=CAU',
    name: 'idk2',
  },
];

const Boxes = ({url, name, spin}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        blurRadius={10}
        style={styles.container}
        source={{
          url: url,
        }}>
        <Animated.View
          style={{
            transform: [
              // {
              //   rotate: this.spinValue.interpolate({
              //     inputRange: [width * -1, 0, width],
              //     outputRange: ['90deg', '0deg', '360deg'],
              //   }),
              // },
              {rotate: spin},
              {scale: 1},
            ],
          }}>
          <Animated.Image
            style={styles.box}
            source={{
              url: url,
            }}
          />
        </Animated.View>
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export const Box = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  console.log(scrollX)

  spinValue = new Animated.Value(0);

  Animated.timing(
    this.spinValue,
  {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true  // To make use of native driver for performance
  }
).start()

// Next, interpolate beginning and end values (in this case 0 and 1)
const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})

  return (
    <View>
      <FlatList
        data={IMAGE_DATA}
        renderItem={({item}) => <Boxes spin={spin} url={item.url} name={item.name} />}
        horizontal
        onScroll={evt => {
          scrollX.setValue(evt.nativeEvent.contentOffset.x);
        }}
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

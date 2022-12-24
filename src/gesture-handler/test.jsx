import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  TapGestureHandler,
  LongPressGestureHandler,
  State,
  RectButton,
} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Header} from '../components';

export const Test_gesture = ({navigation}) => {
  const onLongPress = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('longPress 5s');
    }
  };
  const singleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('single tap');
    }
  };
  const doubleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('double tap');
    }
  };

  const left_action = () => {
    return (
      <RectButton style={styles.blue_box}>
        <Animated.Text>Archive</Animated.Text>
      </RectButton>
    );
  };
  const right_action = () => {
    return (
      <RectButton style={styles.red_box}>
        <Animated.Text>Delete</Animated.Text>
      </RectButton>
    );
  };
  return (
    <View>
      <Header navigation={navigation} />
      <SafeAreaView>
        <Text>single tap</Text>
        <TapGestureHandler onHandlerStateChange={singleTap} numberOfTaps={1}>
          <Image style={styles.box} source={require('../assets/logo.png')} />
        </TapGestureHandler>
        <Text>double tap</Text>
        <TapGestureHandler onHandlerStateChange={doubleTap} numberOfTaps={2}>
          <Image style={styles.box} source={require('../assets/logo.png')} />
        </TapGestureHandler>
        <Text>long press</Text>
        <LongPressGestureHandler
          onHandlerStateChange={onLongPress}
          minDurationMs={500}>
          <Image style={styles.box} source={require('../assets/logo.png')} />
        </LongPressGestureHandler>

        {/* <TapGestureHandler onHandlerStateChange={singleTap} numberOfTaps={1}>
        <TapGestureHandler onHandlerStateChange={doubleTap} numberOfTaps={2}>
          <LongPressGestureHandler
            onHandlerStateChange={onLongPress}
            minDurationMs={500}>
            <Image style={styles.box} source={require('../assets/logo.png')} />
          </LongPressGestureHandler>
        </TapGestureHandler>
      </TapGestureHandler> */}

        <View style={{width: 430, alignItems: 'center'}}>
          <Swipeable
            renderLeftActions={left_action}
            renderRightActions={right_action}>
            <View style={styles.yellow_box}>
              <Text>"hello"</Text>
            </View>
          </Swipeable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 110,
  },
  yellow_box: {
    width: 150,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  red_box: {
    width: 150,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blue_box: {
    width: 150,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {Home} from '..';
import {Test_premission} from '../permission/test_premission';
import {Test_gesture} from '../gesture-handler/test';
import {TabNavigator} from './TabNavigator';
import {View} from 'react-native';
import 'react-native-gesture-handler';

// const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Home />
    </View>
    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen
    //       options={{headerShown: false}}
    //       name="Home"
    //       component={Home}
    //     />
    //     <Drawer.Screen
    //       options={{headerShown: false}}
    //       name="TabNavigator"
    //       component={TabNavigator}
    //     />
    //     <Drawer.Screen
    //       options={{headerShown: false}}
    //       name="Gesture"
    //       component={Test_gesture}
    //     />
    //     <Drawer.Screen
    //       options={{headerShown: false}}
    //       name="Premission"
    //       component={Test_premission}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
};

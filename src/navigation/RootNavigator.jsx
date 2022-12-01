import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '..';
import Ball_icon from '../assets/Ball_icon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const Home = ({navigation}) => {
//   return (
//     <Pressable onPress={() => navigation.openDrawer()}>
//       <Text>Open Drawer123123</Text>
//     </Pressable>
//   );
// };

// const Conference = ({navigation}) => {
//   return (
//     <Pressable onPress={() => navigation.openDrawer()}>
//       <Text>Open Drawer</Text>
//     </Pressable>
//   );
// };

// const Story = ({navigation}) => {
//   return (
//     <Pressable onPress={() => navigation.navigate('Conference')}>
//       <Text>Go to Conference</Text>
//     </Pressable>
//   );
// };

// const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Stack.Navigator>   */}
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: () => <Ball_icon width={30} height={30} />,
            tabBarBadge: 3,
          }}
          component={Home}
        />
        {/* </Stack.Navigator> */}
      </Tab.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen
    //       options={{headerShown: false}}
    //       name="Home"
    //       component={Home}
    //     />
    //     <Drawer.Screen
    //       options={{headerShown: false}}
    //       name="Conference"
    //       component={Conference}
    //     />
    //     <Drawer.Screen
    //       options={{headerShown: false}}
    //       name="Story"
    //       component={Story}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Drawer.Navigator>
    //   <Drawer.Screen options={{headerShown:false}} name="Home" component={Home}/>
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
};

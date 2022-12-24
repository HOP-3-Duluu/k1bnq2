import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ball_icon from '../assets/Ball_icon';
import { Home } from '../components';
import {Random_page1} from '../screens/random_page1';
import {Random_page2} from '../screens/random_page2';

export const TabNavigator = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
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
        <Tab.Screen
          name="Random_page1"
          options={{
            headerShown: true,
            tabBarLabel: 'Random_page1',
            tabBarIcon: () => <Ball_icon width={30} height={30} />,
            tabBarBadge: 5,
          }}
          component={Random_page1}
        />
        <Tab.Screen
          name="Random_page2"
          options={{
            headerShown: true,
            tabBarLabel: 'Random_page2',
            tabBarIcon: () => <Ball_icon width={30} height={30} />,
            tabBarBadge: 2,
          }}
          component={Random_page2}
        />
        {/* </Stack.Navigator> */}
      </Tab.Navigator>
    </NavigationContainer>
  )
};

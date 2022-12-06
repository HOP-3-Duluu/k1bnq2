import React from 'react';
import {ScrollView, Text, View, Pressable} from 'react-native';
import {Header} from './';
import {Sections_row} from './sections_row';
import {styles} from '../../styles/home.jsx';
import {Post_data} from './post_data';
import {SplashScreen} from './splash_screen';
import { UseAsyncStorage } from '../../useAsyncStorage/useAsyncStorage';
import { TestAnimation } from '../../animation/testAnimation';
import { Box } from '../../animation/box';

// const Home = ({navigation}) => {
//   return (
//     <Pressable onPress={() => navigation.openDrawer()}>
//       <Text>Open Drawer</Text>
//     </Pressable>
//   );
// };

// const Conference = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Pressable
//         onPress={() => navigation.openDrawer()}
//         style={{padding: 10, marginBottom: 10, marginTop: 10}}>
//         <Text>Open Drawer</Text>
//       </Pressable>
//     </View>
//   );
// };

// const Story = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Pressable
//         onPress={() => navigation.navigate('Conference')}
//         style={{padding: 10, marginBottom: 10, marginTop: 10}}>
//         <Text>Go to Conference</Text>
//       </Pressable>
//     </View>
//   );
// };

// const Drawer = createDrawerNavigator();

export const Home = () => {
  return (
    <View>
      <Box/>
    </View>
    // <ScrollView>
    //   <View style={styles.screenContainer}>
    //     <Header navigator={navigator} />
    //     <View style={styles.container}>
    //       <View style={styles.header}>
    //         <Text style={styles.header.header_text}>Top Stories for you</Text>
    //       </View>
    //       <Sections_row />
    //       {/* <Post_data/> */}
    //       <View style={styles.bottom_info}>
    //         <Text style={styles.bottom_info.text}>© Aster News, 2021</Text>
    //         <Text style={styles.bottom_info.text}>Privacy Policy</Text>
    //         <Text style={styles.bottom_info.text}>Terms of Service</Text>
    //       </View>
    //     </View>
     
    //   </View>
    // </ScrollView>
      // <UseAsyncStorage/> 
      // <TestAnimation/> 
    // <SplashScreen/>
  );
};

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

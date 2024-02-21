import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StartUp from '../Startup/StartUp';
import Loby from '../Loby/Loby';
import RegisterScreen from '../Loby/SingUp/RegisterScreen';
import LoginScreen from '../Loby/Login/LoginScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import UpNext from '../Screens/UpNext/UpNext';
import ResultScreen from '../Screens/Results/ResultScreen';
import BoardScreen from '../Screens/Board/BoardScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import SettingScreen from '../Screens/Settings/SettingScreen';
import Colors from '../../Utils/Colors/Colors';
import { Entypo, Foundation, MaterialIcons, AntDesign, Feather  } from '@expo/vector-icons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false, }} >

<Tab.Screen
      name="Home"
      component={HomeScreen}
      tabBarOptions={{
        activeTintColor: Colors.DARK_PURPLE,
        inactiveTintColor: Colors.DARK_PURPLE,
        style: {
          backgroundColor: Colors.WHITE,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.DARK_PURPLE, fontSize: 12,  }}>Home</Text>
          
        ),

        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={24} color={Colors.DARK_PURPLE} />
          ),

        tabBarStyle: {
            backgroundColor: Colors.WHITE, // Set background color here
          },

        

       
      }}
      
    />
    

<Tab.Screen
  name="camera"
  component={HomeScreen}
  tabBarOptions={{
    activeTintColor: Colors.WHITE,
    inactiveTintColor: Colors.WHITE,
  }}
  options={{
    tabBarLabel: ({ color }) => (
      <Text style={{ color: Colors.PRIMARY, fontSize: 20,  }}>Camera</Text>
    ),
    tabBarIcon: ({ color, size }) => (
      <Feather name="camera" size={24} color={Colors.PRIMARY} />
    ),
    tabBarStyle: {
      backgroundColor: Colors.WHITE, // Set background color here
    },
  }}
/>
   

<Tab.Screen
      name="profile"
      component={ProfileScreen}
      tabBarOptions={{
        activeTintColor: Colors.WHITE,
        inactiveTintColor: Colors.WHITE,
        style: {
          backgroundColor: Colors.WHITE,
        },
      }}
      options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ color: Colors.DARK_PURPLE, fontSize: 12,  }}>Profile</Text>
          
        ),

        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={24} color={Colors.DARK_PURPLE} />
            
          ),

        tabBarStyle: {
            backgroundColor: Colors.WHITE, // Set background color here
          },

        

       
      }}
      
    />
   



    
  </Tab.Navigator>
);

export const SignInNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={TabNavigator} />
  </Stack.Navigator>
);


export const SignOutNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={StartUp} />
      <Stack.Screen name="Loby" component={Loby} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);



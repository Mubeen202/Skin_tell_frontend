import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StartUp from '../Startup/StartUp';
import Loby from '../Loby/Loby';
import RegisterScreen from '../Loby/SingUp/RegisterScreen';
import LoginScreen from '../Loby/Login/LoginScreen';
import HomeScreen from '../HomeScreen/HomeScreen';

import ProfileScreen from '../Profile/ProfileScreen';
import Colors from '../../Utils/Colors/Colors';
import { Entypo, Foundation, MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import CameraScreen from '../Camera/CameraScreen';
import { useNavigationState } from '@react-navigation/native';
import FinalReport from '../FinalReportScreen/FinalReport';
import signOut from '../SignOut/signOut';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigationState = useNavigationState(state => state);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.PRIMARY : Colors.DARK_PURPLE, fontSize: 12 }}>Home</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign name="home" size={24} color={focused ? Colors.PRIMARY : Colors.DARK_PURPLE} />
          ),
          tabBarStyle: {
            backgroundColor: Colors.WHITE,
            borderTopLeftRadius: 99,
            borderTopRightRadius: 99
          }
        }}
      />

      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.PRIMARY : Colors.DARK_PURPLE, fontSize: 12 }}>Camera</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather name="camera" size={24} color={focused ? Colors.PRIMARY : Colors.DARK_PURPLE} />
          ),
          tabBarStyle: {
            backgroundColor: Colors.WHITE,
          }
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.PRIMARY : Colors.DARK_PURPLE, fontSize: 12 }}>Profile</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign name="user" size={24} color={focused ? Colors.PRIMARY : Colors.DARK_PURPLE} />
          ),
          tabBarStyle: {
            backgroundColor: Colors.WHITE,
          }
        }}
      />

      <Tab.Screen
        name="signOut"
        component={signOut}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? Colors.PRIMARY : Colors.DARK_PURPLE, fontSize: 12 }}>Sign Out</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <AntDesign name="logout" size={24} color={focused ? Colors.PRIMARY : Colors.DARK_PURPLE} />
          ),
          tabBarStyle: {
            backgroundColor: Colors.WHITE,
          }
        }}
      />

   
    </Tab.Navigator>
  );
};

export const SignInNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={TabNavigator} />
  </Stack.Navigator>
);

export const SignOutNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="StartUp" component={StartUp} />
    <Stack.Screen name="Loby" component={Loby} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

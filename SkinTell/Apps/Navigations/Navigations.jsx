import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartUp from '../Startup/StartUp';
import Loby from '../Loby/Loby';
import RegisterScreen from '../Loby/SingUp/RegisterScreen';
import LoginScreen from '../Loby/Login/LoginScreen';
import HomeScreen from '../Dashboard/HomeScreen';
const Stack = createStackNavigator();

export const SignInNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
   <Stack.Screen name="HomeScreen" component={HomeScreen} />
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



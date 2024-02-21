import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StartUp from './Apps/Startup/StartUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loby from './Apps/Loby/Loby';
import RegisterScreen from './Apps/Loby/SingUp/RegisterScreen';
import LoginScreen from './Apps/Loby/Login/LoginScreen';
import DashboardScreen from './Apps/Dashboard/DashboardScreen';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <View style={styles.container}>
    <Stack.Navigator initialRouteName='Home' screenOptions={
      {headerShown:false}
    }>
    <Stack.Screen name="Home" component={StartUp} />
      <Stack.Screen name="Loby" component={Loby} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

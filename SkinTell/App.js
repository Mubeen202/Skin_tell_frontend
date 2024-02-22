import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInNavigation, SignOutNavigation } from './Apps/Navigations/Navigations';
import { ClerkProvider,  SignedIn, SignedOut  } from '@clerk/clerk-expo';
import Configrations from './Utils/Configrations.js/Configrations';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from "expo-secure-store";
 
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <ClerkProvider publishableKey={Configrations.SERVICE_API_KEY} tokenCache={tokenCache}>
      <SafeAreaView style={styles.container}>
    <NavigationContainer>
    <SignedIn>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInNavigation} />

    </Stack.Navigator>
      </SignedIn>
      <SignedOut>
      <Stack.Navigator initialRouteName="StartUp" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignOut" component={SignOutNavigation} />
      </Stack.Navigator>
      </SignedOut>
    </NavigationContainer>
    </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as Google from 'expo-auth-session/providers/google';
import { AuthSession } from 'expo';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Colors from '../../Utils/Colors/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Loby() {

  const navigation = useNavigation();
  
  const handleLogin = () => {
    // Logic for handling login
  };

  const handleSignUp = React.useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);
 

  const handleFacebookLogin = async () => {
    // Logic for handling Facebook login
  };

  const handleGoogleLogin = async () => {
    // Logic for handling Google login
  };

  const [fontsLoaded, fontError] = useFonts({
    "Outfit-Black": require("../../assets/static/Outfit-Black.ttf"),
    "Outfit-Bold": require("../../assets/static/Outfit-Bold.ttf"),
    "Outfit-ExtraBold": require("../../assets/static/Outfit-ExtraBold.ttf"),
    "Outfit-Medium": require("../../assets/static/Outfit-Medium.ttf"),
    "Outfit-Regular": require("../../assets/static/Outfit-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ImageBackground source={require('../../assets/images/homepage_bg.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.titleText}>Welcome to SkinTell.</Text>
        <Text style={styles.welcomeText}>Your Personal Skin Care Companion!</Text>
        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.facebookButton]} onPress={handleFacebookLogin}>
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleGoogleLogin}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 18,
    color: '#fff',
    paddingHorizontal: 20,
    fontFamily: 'Outfit-Medium',
  },
  titleText: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    paddingHorizontal: 20,
    fontFamily: 'Outfit-ExtraBold',
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Outfit-Medium',
  },
  loginButton: {
    backgroundColor: Colors.PRIMARY,
  },
  signUpButton: {
    backgroundColor: Colors.PRIMARY,
  },
  facebookButton: {
    backgroundColor: 'rgba(59, 89, 152, 0.8)',
  },
  googleButton: {
    backgroundColor: 'rgba(219, 68, 55, 0.8)',
  },
});

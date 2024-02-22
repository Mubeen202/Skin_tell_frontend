import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import Colors from '../../Utils/Colors/Colors';
import { useNavigation } from '@react-navigation/native';

export default function StartUp() {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  const navigation = useNavigation();
  const onPress = React.useCallback(() => {
    navigation.navigate('Loby');
  }, [navigation]);

  return (
    <ImageBackground source={require('../../assets/images/homepage.jpg')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.topTextContainer}>
      <Text style={styles.topText}>Skin<Text style={{ color: Colors.DARK_PURPLE}}>Tell</Text></Text>

        <Text style={styles.topTextDesc}>Discover the best skincare solutions</Text>
      </View>
      <View style={styles.subContainer}>
        {/* <Text style={styles.heading}>
          <Text style={styles.subTitle}> Skin <Text style={{ color: '#261256' }}>Tell</Text> </Text>
        </Text> */}
  
        <Text style={styles.desc}> Let's start with Us. We deliver high-quality services.</Text>
  
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
  
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
 
  container: {
    flex: 1,
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust opacity as needed
  },
  topTextContainer: {
    marginTop: 140,
    alignItems: 'center',
 
  },
  topText: {
    fontSize: 52,
    color: 'white',
    fontWeight: 'bold'
  },
  topTextDesc: {
    fontSize: 24,
    color: 'white'
  },
  subContainer: {
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop:400
  },
  heading: {
    color: Colors.WHITE,
    fontSize: 27,
    textAlign: 'center'
  },
  subTitle: {
    fontWeight: 'bold'
  },
  desc: {
    color: Colors.WHITE,
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 99,
    marginTop: 32,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PRIMARY
  }
});


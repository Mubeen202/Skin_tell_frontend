import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors/Colors';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../Utils/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../../../assets/profile3.jpg')}
        style ={styles.loginImage}
        />
      </View>
      <View style={styles.subContainer}>
      
        <Text style={styles.heading}> Let's
        <Text style={styles.subTitle}> Find a Professional Cleaning and Services </Text> 
          with Us. </Text>

          <Text style={styles.desc}>We deliver high-quality services to your doorstep.</Text> 

          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Let's Started</Text>
          </TouchableOpacity>
        

        </View>
    
      
    
    

    </View>
  )
}

const styles = StyleSheet.create({
  loginImage:{
    width:230,
    height: 450,
    marginTop:70,
    borderWidth:4,
    borderTopColor:'#000000',
    borderRadius:15
  },
  container:{
    alignItems:'center'
  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'80%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20
    
  },
  heading:{
    // backgroundColor:Colors.WHITE,
    borderRadius:20,
    color:Colors.WHITE,
    fontSize:27,
    textAlign:'center'
  
  },
  subTitle:{
    fontWeight:'bold'
  
  },
  desc:{
    fontSize:20,
    alignItems:'center',
    color:Colors.WHITE
  
  },
  button:{
    backgroundColor:Colors.WHITE,
    padding:20,
    borderRadius:99,
    marginTop:40,
    alignItems:'center',
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:Colors.PRIMARY
  }
})

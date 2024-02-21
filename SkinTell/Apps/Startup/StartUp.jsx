import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
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
    <View>
      <View style={styles.container}>
        <Image source={require('../../assets/images/homepage.jpg')}
        style ={styles.loginImage}
        />
      </View>
      <View style={styles.subContainer}>
       
        <Text style={styles.heading}> 
        <Text style={styles.subTitle}> Skin <Text style={{color:'#261256'}}>Tell</Text> </Text> 
            </Text>

        <Text style={styles.desc}> Let's start with Us. We deliver high-quality services.</Text>


          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Let's Started</Text>
          </TouchableOpacity>
        

        </View>
    
      
    
    

    </View>
  )
}

const styles = StyleSheet.create({
  loginImage:{
    width:"100%",
    height: 500,
    marginTop:20,
    borderWidth:4,
    borderTopColor:Colors.BLACK,
    borderRadius:15
  },
  container:{
    alignItems:'center'
  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'40%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20,
    
    
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
    borderRadius:20,
    color:Colors.WHITE,
    fontSize:18,
    padding:10,
    textAlign:'center'
  
  },
  button:{
    backgroundColor:Colors.WHITE,
    padding:20,
    borderRadius:99,
    marginTop:32,
    alignItems:'center',
  },
  buttonText:{
    fontSize:20,
    fontWeight:'bold',
    color:Colors.PRIMARY
  }
})

import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from '../../Utils/Colors/Colors';
import { AntDesign } from '@expo/vector-icons';
export default function CameraScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync({
      cameraType: ImagePicker.CameraType.front,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      await setImage(result.assets[0].uri);
      console.log("image is there", image);
    }
  };

  return (
  
      <View style={styles.container}>
        {image ? (
          <ImageBackground
            source={{ uri: image }}
            style={styles.imageBackground}
          >
            {/* Your image section */}
          </ImageBackground>
        ) : (
          <ImageBackground
          
            style={styles.placeHolder}
          >
            <TouchableOpacity onPress={pickImage}>
            <AntDesign name="clouduploado" size={120} color="black" />
            </TouchableOpacity>
            {/* Your image section */}
          </ImageBackground>
        )}

        <View style={styles.content}>
          <Text style={styles.heading}>Welcome to Skin Tell.</Text>
          <Text style={styles.text}>
            Skincare isn't just about looking good; it's about feeling good too.
            Your skin is your body's largest organ, and taking care of it is
            essential for your overall well-being.
          </Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  placeHolder: {
    flex: 1,
    resizeMode: "cover",
    alignItems:"center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.PRIMARY, // Semi-transparent background
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  text: {
    
    fontSize: 16,
    color: "#ffffff",
  },
});
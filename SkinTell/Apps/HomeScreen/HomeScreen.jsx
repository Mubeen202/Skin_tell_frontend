// HomeScreen.js
import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/Minimalist special treatment skin care template (1).png")}
        style={styles.imageBackground}
      >
        {/* Your image section */}
      </ImageBackground>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
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

export default HomeScreen;

import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/homePageImage.png")}
      style={styles.imageBackground}
    />
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default HomeScreen;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-react";

const ProfileScreen = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const email = user.externalAccounts.map((item)=>{return item.emailAddress})

  return (
    <View style={styles.container}>
      {user?.imageUrl ? (
      <Image
        style={styles.profileImage}
        source={{ uri: user.imageUrl }}
      />
    ) : (
      <MaterialIcons
          style={styles.profileIcon}
          name="person"
          size={150}
          color="gray"
        />
    )}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{user.fullName}</Text>
        <Text style={styles.bio}>
          Passionate about technology and coding. Love to build awesome apps!
        </Text>
        <Text style={styles.email}>Email: {email}</Text>
        <Text style={styles.location}>Location: New York, USA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // Set background color
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Make it a circle
    marginBottom: 20,
  },
  profileIcon: {
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333", // Set text color
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#666", // Set text color
  },
  email: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666", // Set text color
  },
  location: {
    fontSize: 14,
    color: "#666", // Set text color
  },
});

export default ProfileScreen;

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
        style={{ width: 100, height: 100, borderRadius:99 }} // Adjust width and height as needed
        source={{ uri: user.imageUrl }} // Set the image source to user.imageUrl
      />
    ) : (
      // You can render a placeholder or default image if user.imageUrl is not available
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
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  email: {
    fontSize: 14,
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
  },
});

export default ProfileScreen;

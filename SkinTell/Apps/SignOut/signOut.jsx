import React, { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-expo';
import { StyleSheet, View } from 'react-native';
import Loader from '../Loader/Loader'; // Make sure this import statement is correct

const SignOut = () => {
  const { signOut } = useAuth();

  useEffect(() => {
    doLogout();
  }, []);

  const doLogout = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignOut;

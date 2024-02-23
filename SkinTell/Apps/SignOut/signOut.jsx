import { useAuth } from '@clerk/clerk-expo';
import { useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
export const SignOut = () => {
	const { signOut } = useAuth();

	const doLogout = () => {
		signOut();
	};
    useEffect(()=>{
        doLogout()
    },[])

	return (
		<View>
            <Text>
            Signout
            </Text>
            
            </View>
	);
};

export default SignOut;
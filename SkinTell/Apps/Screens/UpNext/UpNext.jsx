import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../../../Utils/Colors/Colors';

export default function UpNext() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>UpNext</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.DARK_PURPLE,
      padding: 10,
    },
    text:{
        color: Colors.WHITE
    }
  });
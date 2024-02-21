import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import Colors from '../Utils/Colors/Colors'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    color: Colors.PRIMARY,
    paddingVertical: 12,
    alignItems:'center',
    fontFamily:'Outfit-Bold'
  },
})

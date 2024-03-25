import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const SidePanel = () => {
  return (
    <View style={styles.Container} >
        <Text>Side Panel</Text>
    </View>
  )
}

export default SidePanel

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: 200,
        height: window,
        margin: 10,
        backgroundColor:'red'
    }
})
import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const Title = props =>{
  return(
        <Text style={styles.title}>{props.title}</Text>
  )
}

export const P = props =>{
  return(
        <Text style={styles.description}>{props.p}</Text>
  )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 20
    },
    description: {
        fontSize: 17,
        paddingVertical: 20
    }
})

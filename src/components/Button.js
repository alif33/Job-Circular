import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'


export const Others = props =>{
    
return(
    <TouchableOpacity 
        style={ styles.button } 
        onPress={() => { props.navigation.navigate('Find Job', { pass: 'others', skey : props.name})}}
    >
        <Text style={ styles.text }>
            {props.name}
        </Text>
    </TouchableOpacity>
  )
}

export const Jobs = props =>{
    
return(
    <TouchableOpacity 
        style={ styles.button } 
        onPress={() => { props.navigation.navigate('Find Job', { pass: 'others', skey : props.name})}}
    >
        <Text style={ styles.text }>
            {props.name}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 8,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderWidth: 1,
        borderColor: '#0000ff',
        backgroundColor: '#007bff',
        elevation: 5
    },
    text:{
        fontSize: 17,
        fontWeight: '700',
        color: '#fff'
    }
})

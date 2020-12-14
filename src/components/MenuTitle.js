import React from 'react'
import { View, Text } from 'react-native'

const MenuTitle = props =>{
  return(
    <View style={{paddingLeft: 20, paddingVertical: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', opacity: 0.6}}>
            {props.title}
        </Text>
    </View> 
  )
}

export default MenuTitle
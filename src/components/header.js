import React from 'react'
import { View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const Header = props =>{
    
  return(
      <View style={{flex: 0.07, backgroundColor: "#007bff"}}>
        <StatusBar backgroundColor= "#007bff"/>
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer() }}>                 
                <MaterialCommunityIcons name="menu" size={24} color="#fff" /> 
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>{ 
                    props.navigation.navigate('Search')
                }}>                 
                <FontAwesome name="search" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
       </View>
  )
}


export const SearchHeader = props =>{
    
    return(
        <View style={{flex: 0.2, backgroundColor: "#007bff"}}>
          <StatusBar backgroundColor= "#007bff"/>
          <View style={{ flex: 1}}> 
            <View style={styles.searchSpace}> 
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>{ props.navigation.toggleDrawer() }}>                 
                        <MaterialCommunityIcons name="menu" size={24} color="#fff" /> 
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>{ 
                            props.navigation.navigate('Search')
                        }}>                 
                        <FontAwesome name="search" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: .3, backgroundColor: '#eee'}}> 

            </View>
          </View>
         </View>
    )
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '90%',
        paddingTop: 10
    },
    searchSpace: {
        flex: .7
    }

})

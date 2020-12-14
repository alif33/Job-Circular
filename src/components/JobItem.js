import React from 'react'
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native'

const JobItem = props =>{


  return(
    <TouchableOpacity 
        style={styles.container} 
        onPress={()=>{props.navigation.
            navigate('Job Details', {
                item: props.item,

            })}
        }
    >
        <View style={styles.jobList}> 
            <Text style={styles.title}>{props.item.title}</Text>
            <Text style={styles.date}>Deadline: {props.item.date}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eeeeee',
        marginBottom: 15,
        elevation: 5
    },
    jobList: {
        width: '90%', 
        alignSelf: 'center',
        paddingVertical: 10
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 14,
        color: '#C70039',
        fontStyle: 'italic',
        paddingVertical: 10
    }
})
export default JobItem
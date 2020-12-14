import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import Header from '../components/header'

const Notifications = props =>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return(
    <View style={styles.container}>
    <Header navigation={props.navigation} />
        <View style={styles.body}> 
            <Text style={styles.title}>Notifications : </Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f3f4f4" : "#f3f4f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}        
            />
        </View>
    </View>
   
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: .93,
        paddingTop: 20,
        width: '70%',
        alignSelf: 'center'
    },
    title: {
        width: '50%',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        fontStyle: 'italic'
    }
})
export default Notifications
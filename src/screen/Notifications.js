import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet, Button } from 'react-native'
import { Header } from '../components/header'
import AsyncStorage from '@react-native-community/async-storage'

const Notifications = props =>{
    const [isEnabled, setIsEnabled] = useState(true);



    (async () => {
        const value = await AsyncStorage.getItem('notification');
        if (value) {
          console.log(value, '222')
        }
      })().catch(err => {
        console.error(err);
    });

    const toggleSwitch = async() => {
        console.log(isEnabled)
        setIsEnabled(previousState => !previousState)
        try {
            let notification = {
                mode: isEnabled
            }
            AsyncStorage.setItem(
                'notification',
                JSON.stringify(notification),
                () => {
                    AsyncStorage.getItem('notification', (err, result) => {
                        console.log(result);
                    });
                }
              );
          } catch (error) {
            console.log(error)
        }
    }
    const showResult = async() =>{
        console.log('Hello')
        try {
            const value = await AsyncStorage.getItem('notification');
            if (value) {
              console.log(value)
            }
          } catch (error) {
            console.log(error)
          }
    }
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
            <Button
                title = "Check"
                onPress={showResult}
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
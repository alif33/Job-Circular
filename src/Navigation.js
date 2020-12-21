import React from 'react'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './screen/HomeScren'
import JobDetails from './screen/JobDetails'
import DrawerContent from './screen/DrawerContent'
import FindJob from './screen/FindJob'
import Notifications from './screen/Notifications'
import Info from './screen/Info'
import Search from './screen/Search'

const Drawer = createDrawerNavigator()

const AppNavigator = props =>{
  console.log(props)
  return(
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
         <Drawer.Screen name="Home" component={ HomeScreen }/>
         <Drawer.Screen name="Find Job" component={ FindJob }/>
         <Drawer.Screen name="Job Details" component={ JobDetails }/>
         <Drawer.Screen name="Notifications" component={ Notifications }/>
         <Drawer.Screen name="Information" component={ Info }/>
         <Drawer.Screen name="Search" component={ Search }/>
     </Drawer.Navigator> 
    </NavigationContainer>
  )
}

export default AppNavigator
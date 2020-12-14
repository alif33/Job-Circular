import React from 'react'
import { Image } from 'react-native'
import { DrawerItem } from '@react-navigation/drawer'
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import Job from '../../assets/job.png'
import Preparation from '../../assets/preparation.png'

export const JobDrawerItem = props =>{
  return(
    <DrawerItem 
        labelStyle={{fontSize: 17, fontWeight: '700'}}
        icon={ ()=>(<Image source={Job} style={{ height: 20, width: 20}} /> )}            
        label = { props.name }
        onPress={() => { props.navigation.navigate('Find Job', { pass: 'jobs', skey : props.name})}}
    />
  )

}

export const PreparationDrawerItem = props =>{
  return(
    <DrawerItem 
        labelStyle={{fontSize: 17, fontWeight: '700'}}
        icon={ ()=>(<Image source={Preparation} style={{ height: 20, width: 20}} /> )}            
        label = { props.name }
        onPress={() => { props.navigation.navigate('Find Job', { pass: 'others', skey : props.name})}}
    />
  )

}

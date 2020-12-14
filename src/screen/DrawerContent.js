import React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { JobDrawerItem, PreparationDrawerItem } from '../components/CommonDrawerItem'
import MenuTitle from '../components/MenuTitle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DrawerContent = props =>{

  return(
    <DrawerContentScrollView >
        <DrawerItem 
            labelStyle={{fontSize: 17, fontWeight: '700'}}
            icon={ ()=>(<MaterialCommunityIcons name="home-outline" size={24} color="#000" /> )}            
            label = "Home"
            onPress={() => { props.navigation.navigate('Home') }}
        />
        <DrawerItem 
            labelStyle={{fontSize: 17, fontWeight: '700'}}
            icon={ ()=>(<MaterialIcons name="favorite" size={24} color="#000" /> )}            
            label = "Favourite List"
            onPress={() => {}}
        />
        <View style = {styles.lineStyle} />
        <PreparationDrawerItem
            navigation = {props.navigation}
            name = 'Job Exam Notice'
        />
        <View style = {styles.lineStyle} />
        <MenuTitle 
            title="Job Preparation"
        />
        <PreparationDrawerItem
            navigation = {props.navigation}
            name = 'প্রতিদিনের তথ্য'
        />
        <PreparationDrawerItem
            navigation = {props.navigation}
            name = 'সাম্প্রতিক তথ্য'
        />
        <PreparationDrawerItem
            navigation = {props.navigation}
            name = 'প্রিলিমিনারি প্রস্তুতি'
        />
        <PreparationDrawerItem
            navigation = {props.navigation}
            name = 'BCS প্রস্তুতি'
        />
        <PreparationDrawerItem
            navigation = {props.navigation}
            name = 'চাকরির প্রস্তুতি'
        />
        <PreparationDrawerItem
            navigation = {props.navigation}
            name = 'নোটিশ'
        />
        <PreparationDrawerItem
            navigation = {props.navigation}
            name = 'পরীক্ষার সময়সূচি'
        />
        <View style = {styles.lineStyle} />
        <MenuTitle 
            title="Job Category"
        />
        <JobDrawerItem
            navigation = {props.navigation}
            name = 'ব্যাংক জবস'
        />
        <JobDrawerItem
            navigation = {props.navigation}
            name = 'এনজিও জবস'
        />
        <JobDrawerItem
            navigation = {props.navigation}
            name = 'সেলস/মার্কেটিং'
        />
        <JobDrawerItem
            navigation = {props.navigation}
            name = 'রেলওয়ে জবস'
        />
        <JobDrawerItem
            navigation = {props.navigation}
            name = 'ডিফেন্স জবস'
        />
        <JobDrawerItem
            navigation = {props.navigation}
            name = 'শিক্ষক নিয়োগ'
        />
        <JobDrawerItem
            navigation = {props.navigation}
            name = 'হেলথ/মেডিকেল'
        />
        <JobDrawerItem
            navigation = {props.navigation}
            name = 'অন্যান্য/Others'
        />
        <View style = {styles.lineStyle} />
        <DrawerItem 
            labelStyle={{fontSize: 17, fontWeight: '700'}}
            icon={ ()=>(<MaterialIcons name="notifications" size={24} color="#000" /> )}            
            label = "Notification setting"
            onPress={() => { props.navigation.navigate('Notifications') }}
        />
        <View style = {styles.lineStyle} />
        <DrawerItem 
            labelStyle={{fontSize: 17, fontWeight: '700'}}
            icon={ ()=>(<MaterialCommunityIcons name="alpha-i-circle" size={24} color="#000" /> )}            
            label = "Terms and conditions"
            onPress={() => { props.navigation.navigate('Information', {
                name: "terms"
                }) 
            }}
        />
        <DrawerItem 
            labelStyle={{fontSize: 17, fontWeight: '700'}}
            icon={ ()=>(<MaterialCommunityIcons name="alpha-i-circle" size={24} color="#000" /> )}            
            label = "Privacy Policy"
            onPress={() => { props.navigation.navigate('Information', {
                name: "privacy"
                }) 
            }}
        />
        <DrawerItem 
            labelStyle={{fontSize: 17, fontWeight: '700'}}
            icon={ ()=>(<MaterialIcons name="system-update" size={24} color="#000" /> )}            
            label = "Check for update"
            onPress={() => { props.navigation.navigate('About') }}
        />
        <DrawerItem 
            labelStyle={{fontSize: 17, fontWeight: '700'}}
            icon={ ()=>(<FontAwesome name="user-circle-o" size={24} color="#000" /> )}            
            label = "About Us"
            onPress={() => { props.navigation.navigate('Information', {
                name: "about"
                }) 
            }}
        />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
   }
})
export default DrawerContent
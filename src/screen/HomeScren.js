import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import { Header } from '../components/header'
import JobItem from '../components/JobItem'
import { Others, Jobs } from '../components/Button'
import fb from '../../firebase'
import admob, { MaxAdContentRating, BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import _ from 'lodash'

const bannerUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1491039127351280/9364299646';
const Home = props =>{
    const [list, setList] = React.useState(null);
    useEffect(()=>{
        fb.database().ref('/jobs').on('value', snapshot => {           
                const jobList = _.map(snapshot.val(), (val, key)=>{
                    return {
                      ...val,
                      key: key
                    }
                  })
                 setList(jobList)
        })

        admob()
            .setRequestConfiguration({
                maxAdContentRating: MaxAdContentRating.PG,
                tagForChildDirectedTreatment: true,
                tagForUnderAgeOfConsent: true,
            })
            .then(() => {

            });

    }, [])
    let jobList = null
    if(list){
        jobList = (<FlatList data={list} renderItem={({item})=>{ return(<JobItem item={item} navigation={props.navigation}/>)}}/>)  

    }else{
        jobList =  <ActivityIndicator size="large" color="#0000ff" />
    }

  return(
    <View style={styles.container}>
        <Header navigation={props.navigation} />
        <View style={{flex: .1}}>
            <ScrollView horizontal={true}>
                <View style={{ flex: 1, flexDirection: 'row' }}> 
                    <Others  name="পরীক্ষার সময়সূচি" navigation={props.navigation}/>
                    <Jobs  name="ব্যাংক জবস" navigation={props.navigation}/>
                    <Others  name="প্রিলিমিনারি প্রস্তুতি" navigation={props.navigation}/>
                </View>
            </ScrollView>  
        </View> 
        <View style={styles.body}>            
            {jobList}         
        </View>
        <View style={{flex: .07, alignSelf: 'center'}}>
        <BannerAd
              unitId={bannerUnitId}
              size={BannerAdSize.BANNER}
              requestOptions={{
                  requestNonPersonalizedAdsOnly: true,
              }}
        /> 
        </View> 
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    body: {
        flex: 0.76,
        backgroundColor: '#fff'
    }
})
export default Home
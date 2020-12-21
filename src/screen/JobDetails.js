import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, PermissionsAndroid, ToastAndroid, Dimensions, TouchableOpacity } from 'react-native'
import { Header } from '../components/header'
import RNFetchBlob from "rn-fetch-blob";
import Pdf from 'react-native-pdf';
import admob,{ InterstitialAd, AdEventType, TestIds,MaxAdContentRating, BannerAd, BannerAdSize} from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-1491039127351280/3373412848';
const bannerUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-1491039127351280/9364299646';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
});


const JobDetails = (props) =>{
  const [imageProp, setImageProp] = React.useState(null);
  const [pages, setPages] = React.useState(null);
  const [loaded, setLoaded] = useState(false);
  const { title, description, date, image, pdf }=props.route.params.item

  let dirs = RNFetchBlob.fs.dirs;

  useEffect(()=>{
    if(image){
      Image.getSize(image, (width, height)=>{
        setImageProp({
          width: width,
          height: height
        })
      })   
    }

    admob()
    .setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.PG,
        tagForChildDirectedTreatment: true,
        tagForUnderAgeOfConsent: true,
    })
    .then(() => {

    });

    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
      if (type === AdEventType.CLOSED) {
        console.log("ad closed");
        setLoaded(false);
        interstitial.load();
      }
    });

    interstitial.load();
    return () => {
      eventListener();
    };

  },[props.route.params.item])


  let showDate = null
  if(date){
    showDate = (
      <Text style={ styles.date }>Deadline: { date }</Text>
    )
  }
 
  let showImage = null
  if(image !== ''){
    if(imageProp){
      const win = Dimensions.get('window')
      const ratio = win.width/imageProp.width
      showImage = (
        <Image
            style={{ 
              height: imageProp.height* ratio, 
              width: win.width, 
              resizeMode: 'cover',
            }}
            source={{ uri: image }}
        />
      )
    }
  }  

  let shownPdf = null
  if(pdf){
    if(pdf !== ''){
      shownPdf = true
    }
  }

  let showButton = null
  if(showImage || shownPdf){
    showButton =  true
  } 



  const downloadImage = async() =>{
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);    
      try {
        if(granted){
          if(image){

            let newImgUri = image.lastIndexOf('/');
            let imageName = image.substring(newImgUri);  
            let path =  dirs.PictureDir + imageName;

            ToastAndroid.show("Downloading...", ToastAndroid.SHORT);
            RNFetchBlob.config({
              fileCache: true,
              appendExt: 'png',
              indicator: true,
              IOSBackgroundTask: true,
              path: path,
              addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: path,
                description: 'Image'
              },
        
            }).fetch("GET", image).then(res => {
              console.log(res, 'end downloaded')
            }).catch(err=>{
              console.log(err)
            })
          }
          if(pdf){

            let newPdfUri = pdf.lastIndexOf('/');
            let pdfName = pdf.substring(newPdfUri);  
            let pdfpath =  dirs.DownloadDir+pdfName;

            ToastAndroid.show("Downloading...", ToastAndroid.SHORT);
            RNFetchBlob.config({
              fileCache: true,
              appendExt: 'pdf',
              indicator: true,
              IOSBackgroundTask: true,
              path: pdfpath,
              addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: pdfpath,
                description: 'Pdf'
              },
        
            }).fetch("GET", pdf).then(res => {
              console.log(res, 'end downloaded')
            }).catch(err=>{
              console.log(err)
            })
          }
          if (loaded) {        
            interstitial.show();
          }
        }
      } catch (error) {
        console.log(error)
      } 
  }


  return(
    <View style={{ flex: 1 }}>
      <Header navigation={ props.navigation } /> 
      <ScrollView style={ styles.body } >
        <View style={styles.container}> 
          <Text style={ styles.title }>{ title }</Text>
          {showDate}
          <Text style={ styles.description }>{ description }</Text>        
        </View> 
          {showImage}
        <View>
        {shownPdf &&(
            <View style={{paddingTop: 10}}>
              <Pdf
                  source={{uri: pdf, cache:true}}
                  onLoadComplete={(numberOfPages,filePath)=>{
                  }}
                  onPageChanged={(page,numberOfPages)=>{
                    setPages(numberOfPages)
                  }}
                  onError={(error)=>{
                      console.log(error);
                  }}
                  onPressLink={(uri)=>{
                  }}
                  style={{
                    flex:1,
                    width:Dimensions.get('window').width,
                    height: pages*530
                  }}
              />
          </View>  
        )}

        </View>

        {showButton &&(
          <>
              <TouchableOpacity 
                style={styles.download}
                onPress={downloadImage}
              > 
                <Text style={styles.downText}>Download</Text>
              </TouchableOpacity>
          </>
        )}
        <View style={{paddingBottom: 29, alignSelf: 'center'}}> 
          <BannerAd
              unitId={bannerUnitId}
              size={BannerAdSize.BANNER}
              requestOptions={{
                  requestNonPersonalizedAdsOnly: true,
              }}
          /> 
        </View>
      </ScrollView>
      
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center'
  },

  body: {
    flex: 0.93,
    width: '100%',
    alignSelf: 'center',
    paddingTop: 20
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  date: {
    paddingTop: 20,
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FF0000'
  },

  description: {
    paddingTop: 20,
    fontSize: 17,
    paddingBottom: 40
  },

  download: {
    width: '60%', 
    backgroundColor: '#007bff', 
    alignSelf: 'center', 
    paddingTop: 8, 
    paddingBottom: 8, 
    marginVertical: 50, 
    borderRadius: 2
  },

  downText: {
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#fff', 
    justifyContent: 'center'
  }

})
export default JobDetails

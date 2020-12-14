import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, PermissionsAndroid, ToastAndroid, Dimensions, TouchableOpacity } from 'react-native'
import { Header } from '../components/header'
import RNFetchBlob from "rn-fetch-blob";

const JobDetails = (props) =>{
  const [imageProp, setImageProp] = React.useState(null);
  const { title, description, date, image, pdf }=props.route.params.item

 
  let newImgUri = image.lastIndexOf('/');
  let imageName = image.substring(newImgUri);  
  let dirs = RNFetchBlob.fs.dirs;
  let path =  dirs.PictureDir + imageName;

  useEffect(()=>{
    if(image){
      Image.getSize(image, (width, height)=>{
        setImageProp({
          width: width,
          height: height
        })
      })   
    }


  },[image])

  let showDate = null
  if(date){
    showDate = (
      <Text style={ styles.date }>Deadline: { date }</Text>
    )
  }
  console.log(imageProp)
  let showImage = null

  if(imageProp){
      const win = Dimensions.get('window')
      const ratio = win.width/imageProp.width
    showImage = (
      <>
      <Image
          style={{ 
            height: imageProp.height* ratio, 
            width: win.width, 
            resizeMode: 'cover',
          }}
          source={{ uri: image }}
      />

      </>
    )
  }


  const downloadImage = async() =>{
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);    
      try {
        if(granted){
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
      } catch (error) {
        console.log(error)
      } 
  }

    const pdfOpener = () => {
      console.log(pdf)
    }
  return(
    <View style={{ flex: 1 }}>
      <Header navigation={ props.navigation } /> 
      <ScrollView style={ styles.body }>
        <View style={styles.container}> 
          <Text style={ styles.title }>{ title }</Text>
          {showDate}
          <Text style={ styles.description }>{ description }</Text>        
        </View> 
        {showImage}
        {showImage &&(
              <TouchableOpacity 
                style={styles.download}
                onPress={downloadImage}
              > 
                <Text style={styles.downText}>Download</Text>
              </TouchableOpacity>
        )}
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




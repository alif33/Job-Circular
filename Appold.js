/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  PermissionsAndroid,
  Platform
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
  
} from 'react-native/Libraries/NewAppScreen';
import RNFetchBlob from "rn-fetch-blob";
const App: () => React$Node = () => {
  

  let imgUrl = 'https://static.scientificamerican.com/sciam/cache/file/EAF12335-B807-4021-9AC95BBA8BEE7C8D_source.jpg'

let newImgUri = imgUrl.lastIndexOf('/');
let imageName = imgUrl.substring(newImgUri);

let dirs = RNFetchBlob.fs.dirs;
let path = Platform.OS === 'ios' ? dirs['MainBundleDir'] + imageName : dirs.PictureDir + imageName;

// saveToGallery = () => {
//   if (Platform.OS == 'android') {

//     RNFetchBlob.config({
//       fileCache: true,
//       appendExt: 'png',
//       indicator: true,
//       IOSBackgroundTask: true,
//       path: path,
//       addAndroidDownloads: {
//         useDownloadManager: true,
//         notification: true,
//         path: path,
//         description: 'Image'
//       },

//     }).fetch("GET", imgUrl).then(res => {
//       console.log(res, 'end downloaded')
//     });
//   } else {
//     CameraRoll.saveToCameraRoll(imgUrl);
//   }
// }


  const testPermission = async() =>{
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    
    if(granted){
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
  
      }).fetch("GET", imgUrl).then(res => {
        console.log(res, 'end downloaded')
      });
    }
  }


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />

        <Button
          title='Test'
          onPress={ testPermission }
        />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;









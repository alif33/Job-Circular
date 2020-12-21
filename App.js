import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal'; 
import Navigation from './src/Navigation'


export default class App extends Component {

  constructor(properties) {
    super(properties);
    OneSignal.setLogLevel(6, 0);

    OneSignal.init('f9ccb3f5-17df-4cb9-9bac-54f40e128bfe', {kOSSettingsKeyAutoPrompt : false, kOSSettingsKeyInAppLaunchURL: false, kOSSettingsKeyInFocusDisplayOption:2});
    OneSignal.inFocusDisplaying(2);
    OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);
  
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
   
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }
  
  onReceived(notification) {
    
  }
  
  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }
  
    onIds(device) {
      console.log('Device info: ', device);
    }
    render(){
      return(
        <Navigation />
      ) 
    }
  }
  function myiOSPromptCallback(permission){
    //
  }








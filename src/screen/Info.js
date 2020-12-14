import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Title, P } from '../components/Tp'
import { Header } from '../components/header'

const Info = props =>{
    
  return(
    <View style={styles.container}>
        <Header navigation={props.navigation} />
        <View style={{flex: .93, width: '90%', alignSelf: 'center'}}> 
        <ScrollView showsVerticalScrollIndicator={false}>
            { props.route.params.name === 'about' && 
              <>
              <Title  
              title="Disclaimer for job circuler"
            />
            <P  
              p="We are doing our best to prepare the content of this app. However, job circuler cannot warranty the expressions and suggestions of the contents, as well as its accuracy. In addition, to the extent permitted by the law, job circuler shall not be responsible for any losses and/or damages due to the usage of the information on our app. Our Disclaimer was generated with the help of the App Disclaimer "
            />
            <P  
              p="By using our app, you hereby consent to our disclaimer and agree to its terms."
            />
            <P  
              p="Any links contained in our app may lead to external sites are provided for convenience only. Any information or statements that appeared in these sites or app are not sponsored, endorsed, or otherwise approved by job circuler . For these external sites, job circuler cannot be held liable for the availability of, or the content located on or through it. Plus, any losses or damages occurred from using these contents or the internet generally."
            />
            <Title  
              title="Representation"
            />
            <P  
              p="We do not represent the government entity and are not affiliated with any government entity. This app does not represent any government or political entity.  Information relating to government can be found here at- https://bangladesh.gov.bd"
            />
            <Title  
              title="আপনি এই অ্যাপ ব্যবহারের মাধ্যমে নিচের শর্তাবলী গুলো মেনে নিচ্ছেন। "
            />
            <P  
              p="এই অ্যাপ এ প্রকাশিত সকল বিজ্ঞপ্তি, নোটিশ, কন্টেন্ট সহ অন্যান্য বিষয় বিভিন্ন ওয়েবসাইট, পত্রিকা ইত্যাদি মাধ্যম থেকে সংগ্রহীত। সুতরাং এই সকল তথ্যের গ্যারান্টি, সত্যতার নিশ্চয়তা কর্তৃপক্ষ দিতে পারে না এবং এই সকল বিষয়ে কোন ধরনের জবাবদিহিতা করতেও বাধ্য নয়। এর তথ্য ব্যবহারের দায় দায়িত্ব একান্ত ব্যবহারকারীর নিজের। এই অ্যাপ-এ প্রকাশিত যেকোনো চাকরি সংক্রান্ত তথ্য  বিভিন্ন উতস (পত্রিকা, অনলাইন ইত্যাদি) দেওয়া হয়ে থাকে। প্রকাশিত যেকোনো ধরণের চাকরি তথ্য বা নিয়োগ-প্রক্রিয়ার দায়-দায়িত্ব স্ব-স্ব উৎসের। এ সংক্রান্ত কোনো অসত্য বা অসম্পূর্ন তথ্য অথবা আর্থিক লেনদেনের দায় এই অ্যাপ-এর নয়। চাকরিপ্রার্থীদের এই ব্যাপারে সতর্ক হবার জন্য পরামর্শ দেওয়া হচ্ছে।"
            />     
            </>
            }
            { props.route.params.name === 'privacy' && 
              <>
              <Title  
              title="Privacy Policy"
            />
            <P  
              p="career sulotion built the jib circuler app as an Ad Supported app. This SERVICE is provided by career sulotion at no cost and is intended for use as is.
              This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
              If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
              "
            />
            <P  
              p="The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at jib circuler unless otherwise defined in this Privacy Policy."
            />
            <Title  
              title="Information Collection and Use"
            />
            <P  
              p="For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.
              The app does use third party services that may collect information used to identify you.
              Link to privacy policy of third party service providers used by the app
              "
            />
            <Title  
              title="Log Data"
            />
            <P  
              p="I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics."
            />     
            <Title  
              title="Cookies"
            />
            <P  
              p="Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service."
            />     
            <Title  
              title="Service Providers"
            />
            <P  
              p="I may employ third-party companies and individuals due to the following reasons:"
            />     
            <P  
              p="I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
            />     
            <Title  
              title="Security"
            />
            <P  
              p="I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security."
            />          
            <Title  
              title="Links to Other Sites"
            />
            <P  
              p="This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
            />          
            <Title  
              title="Changes to This Privacy Policy"
            />
            <P  
              p="I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page."
            />          
            <Title  
              title="Contact Us"
            />
            <P  
              p="If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at nethaypaul928@gmail.com."
            />          
            </>
            }  
            { props.route.params.name === 'terms' && 
              <>
              <Title  
              title="Terms & Conditions"
            />
            <P  
              p="By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to career sulotion."
            />
            <P  
              p="career sulotion is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for."
            />
            <P  
              p="The job circuler app stores and processes personal data that you have provided to us, in order to provide my Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the jib circuler app won’t work properly or at all."
            />
            <P  
              p="The app does use third party services that declare their own Terms and Conditions. Link to Terms and Conditions of third party service providers used by the app"
            />
            <P  
              p="You should be aware that there are certain things that career sulotion will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but career sulotion cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left."
            />
            <P  
              p="If you’re using the app outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app."
            />
            <P  
              p="Along the same lines, career sulotion cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, career sulotion cannot accept responsibility."
            />
            <P  
              p="With respect to career sulotion’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavour to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. career sulotion accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app."
            />
            <P  
              p="At some point, we may wish to update the app. The app is currently available on Android – the requirements for system(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. career sulotion does not promise that it will always update the app so that it is relevant to you and/or works with the Android version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device."
            />
            <Title  
              title="You are agreeing to the following terms by using this app"
            />
            <P  
              p=" All notices, notices, content and other issues published in this app are collected from various websites, magazines etc. Therefore, the authorities cannot guarantee the accuracy of all this information and are not obliged to be held accountable for any of these matters. The responsibility for using this information rests solely with the user."
            />
            <P  
              p="Information about any job published in this app is given in various sources (magazines, online, etc.). Responsibility for any type of published job information or recruitment process is self-contained. This app is not responsible for any untrue or incomplete information or financial transactions in this regard. Job seekers are advised to be careful in this regard. If you have any problems or losses as a result of using the information, the user will be held responsible."
            />
            <P  
              p="It is advisable to refrain from financial, asset (all such) transactions in any recruitment. If any kind of financial, physical, mental or any other kind of loss / problem occurs as a result of using the information of this app, the responsibility is not entirely the responsibility of the user and in no way the authority of this app."
            />
            <P  
              p="The user will verify the information about any date related to the date including the last date of recruitment notification, date of examination. No complaints regarding this are acceptable to the app authorities. And in case of failure to apply for any job as a result of using all this information, failing to clear the admission form, failing to participate in the examination or facing any kind of loss or problem in this regard, the responsibility lies entirely with the information user and not the app authority."
            />
            <P  
              p="The Authority reserves the right to change the above Terms or any part thereof at any time."
            />
            <Title  
              title="Log Data"
            />
            <P  
              p="I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics."
            />     
            <Title  
              title="Changes to This Terms and Conditions"
            />
            <P  
              p="I may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Terms and Conditions on this page."
            />     
            <Title  
              title="Service Providers"
            />
            <P  
              p="I may employ third-party companies and individuals due to the following reasons:"
            />         
            <Title  
              title="Contact Us"
            />
            <P  
              p="If you have any questions or suggestions about my Terms and Conditions, do not hesitate to contact me at nethaypaul928@gmail.com."
            />                
            </>
            }                
          </ScrollView>     
        </View>    
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Info
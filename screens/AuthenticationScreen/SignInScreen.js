//import liraries
import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image, Dimensions, StatusBar, SafeAreaView, Keyboard, 
    KeyboardAvoidingView, TouchableWithoutFeedback, Modal, FlatList} from 'react-native';

import {
    Container,
    Item,
    Input,
    Icon
  } from 'native-base'
import data from '../../Countries'

import { useFonts } from '@use-expo/font'
import { AuthContext } from '../../navigation/AuthProvider'

import * as Google from 'expo-google-app-auth'

import * as FirebaseRecaptcha from 'expo-firebase-recaptcha';
// import Firebase, {firebaseConfig} from '../config/Firebase';

import * as firebase from 'firebase'


const {width, height} = Dimensions.get('window');


const firebaseConfig = {
    apiKey: "AIzaSyBzuL4r3YG7BDdq1MDjd2C-10LHxfbCqT8",
    authDomain: "trakker-e141d.firebaseapp.com",
    databaseURL: "https://trakker-e141d.firebaseio.com",
    projectId: "trakker-e141d",
    storageBucket: "trakker-e141d.appspot.com",
    messagingSenderId: "285618643406",
    appId: "1:285618643406:web:ba2eed02836f16148fcb9f",
    measurementId: "G-K0S40CMVG7"
};



const defaultFlag = data.filter(
    (obj) => obj.name === 'India'
)[0].flag

const SignUpScreen = ({ navigation }) => {
    

    let [fontsLoaded] = useFonts({
        'Avenir': require('../../assets/fonts/AvenirLTStd-Roman.otf')
    });

    const { onSignIn } = useContext(AuthContext)

    const [flag, setFlag ] = useState(defaultFlag)
    const [countryCode, setCountryCode ] = useState("+91")
    const [ modalVisible, setModalVisible ] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null)
    const recaptchaVerifier = useRef(null)


    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }

    const sendVerification =  async () => {
        try {

            
            const tempPhone = countryCode.concat(phoneNumber)
            
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            // setVerifyInProgress(true);
            setVerificationId("");
            const verificationId = await phoneProvider
              .verifyPhoneNumber(tempPhone, recaptchaVerifier.current);
            // setVerifyInProgress(false);
            setVerificationId(verificationId);
            setCountryCode("+91")
            setPhoneNumber("")

            navigation.navigate("VerificationScreen", {
                verificationId: verificationId,
            });

        } catch(err) {
            alert(err.message);
        }

    };

    const selectCountry = async (country) => {
        // Get data from Countries.js  
        const countryData = await data
        try {
          // Get the country code
          const countryCodeTemp = await countryData.filter(
            obj => obj.name === country
          )[0].dial_code
          // Get the country flag
          const countryFlag = await countryData.filter(
            obj => obj.name === country
          )[0].flag
            setCountryCode(countryCodeTemp)
            setFlag(countryFlag)
            await hideModal();
        }
        catch (err) {
          console.log(err)
        }
    }

    const [signedIn, setSignedIn ] = useState(false)
    const [name, setName ] = useState("")
    const [photoUrl, setPhotoUrl ] = useState("")

    const { user, setUser } = useContext(AuthContext);


    const ANDROID_CLIENT_ID = "1024080666820-6ocg5ivpmoitr8rishk11fpfdj3g9p91.apps.googleusercontent.com"

    const signInWithGoogle = async () => {
        try {
          const result = await Google.logInAsync({
            // iosClientId: IOS_CLIENT_ID,
            androidClientId: ANDROID_CLIENT_ID,
            scopes: ["profile", "email"]
          });
          
          if (result.type === "success") {
            console.log("LoginScreen.js.js 21 | ", result.user.givenName);
            setSignedIn(true);
            setName(result.user.name)
            setPhotoUrl(result.user.photoUrl)
            // setUser(result.user);
            onSignIn(result);


          } else {
            return { cancelled: true };
          }
        } catch (e) {
          console.log('LoginScreen.js.js 30 | Error with login', e);
          return { error: true };
        }
    };


    
    const countryData = data
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="default"/>
            
               <Image
                    source = {require('../../assets/header.png')}
                    style={{flex:1, ...styles.headerImg}}
                />

                <View style={styles.form}>
                    <FirebaseRecaptcha.FirebaseRecaptchaVerifierModal
                        ref={recaptchaVerifier}
                        firebaseConfig={firebaseConfig}
                    />

                    <Text style={styles.text_footer}>Sign-In:</Text>
                    <View style={styles.action}>
                        <KeyboardAvoidingView
                            style={styles.container}
                            behavior='padding' enabled
                        >
                            <TouchableWithoutFeedback
                                style={styles.container}
                                onPress={Keyboard.dismiss}
                            >
                                <View style={styles.container}>
                                    <Item rounded style={styles.itemStyle}>
                                        <Icon 
                                            active
                                            name='call'
                                            style={styles.iconStyle}
                                        />
                                        <View><Text>{flag}</Text></View>
                                        <Icon
                                            active
                                            name='md-arrow-dropdown'
                                            style={[styles.iconStyle, { marginLeft: 5 }]}
                                            onPress={() => showModal()}
                                        />
                                        
                                        <Input 
                                            style={styles.inputStyle}
                                            placeholder="XXX XXX XXXX"
                                            placeholderTextColor="#6178B8"
                                            keyboardType={'phone-pad'}
                                            returnKeyType='done'
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            secureTextEntry={false}
                                            onChangeText={(phoneNumber) => {
                                                setPhoneNumber(phoneNumber)  
                                            }}
                    
                                        />

                                        <Modal
                                            animationType="slide"
                                            transparent={false}
                                            visible={modalVisible}
                                        >
                                            <View style={{ flex: 1 }}>
                                                <View style={{ flex: 7, marginTop: 80 }}>
                                                {/* Render the list of countries */}
                                                <FlatList
                                                    data={countryData}
                                                    keyExtractor={(item, index) => index.toString()}
                                                    renderItem={
                                                    ({ item }) =>
                                                        <TouchableWithoutFeedback 
                                                            onPress={() => selectCountry(item.name)}>
                                                            <View style={styles.countryStyle}>
                                                                <Text style={styles.textStyle}>
                                                                {item.flag} {item.name} ({item.dial_code})
                                                                </Text>
                                                            </View>
                                                        </TouchableWithoutFeedback>
                                                    }
                                                />
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => hideModal()}
                                                    style={styles.closeButtonStyle}>
                                                <Text style={{color:'white', fontSize:20}}>
                                                    Cancel
                                                </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </Modal>
                                    </Item>
                                </View>
                            </TouchableWithoutFeedback>
                        </KeyboardAvoidingView>

                    </View>

                    <TouchableOpacity 
                        style={styles.startBtn}
                        onPress={sendVerification}
                    >
                        <Text style={{color: "#384C86", fontFamily:'Avenir', fontWeight:"500", fontSize:20}}>Sign In</Text>
                    </TouchableOpacity>

                    <Text style={[styles.text_footer, {marginTop:30, fontWeight:'bold'}]}>OR</Text>
                    <Text style={[styles.text_footer, {marginTop:20}]}>Sign-in with:</Text>

                    <TouchableOpacity 
                        style={styles.googlebox}
                        onPress={signInWithGoogle}
                    >
                        <View style={styles.icon}>
                            <Image 
                                source={require('../../assets/google.png')} 
                                style={styles.googleLogo}
                                resizeMode="cover"
                            />
                        </View>
                        <Text style={{fontWeight:'bold', color:'#fff', fontSize:23}}>Google</Text>
                    </TouchableOpacity>

                    <Image
                        source = {require('../../assets/logo.png')}
                        style={styles.logo}
                        resizeMode="cover"
                    />
                </View>
                
            {/* </Animatable.View> */}
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#384C86',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerImg: {
        flex: 1,
        position: 'absolute',
        top: -680,
        right: -450,
    },
    footer: {
        flex: 3,
        backgroundColor: 'red',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    form: {
        flex: 1,
        position:"absolute",
        top: height*0.2,
        alignItems:'center',
        justifyContent:'center'
    },
    logo: {
        height: height*0.1,
        width: width*.5,
        marginTop: 80,
        // backgroundColor:'red'
    },
    text_footer: {
        color: '#97A8D5',
        fontSize: 20,
        fontFamily: 'Avenir',
    },
    action: {
        flexDirection: 'row',
        marginTop: 30,
        paddingBottom: 5,
        height:40,
        width:width*.9,
        left: 0,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    iconStyle: {
        color: '#97A8D5',
        fontSize: 28,
        marginLeft: 15,
        marginRight:10,
        paddingRight:6
    },
    itemStyle: {
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        paddingLeft:20
    },
    startBtn: {
        marginTop: 40,
        height: 42,
        width: width* .5,
        backgroundColor: "#97A8D5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    countryStyle : {
        padding: 6,
        backgroundColor:'#D3DAEF'
    },
    closeButtonStyle: {
        padding: 10,
        backgroundColor: '#6178B8',
        alignItems: 'center',
        justifyContent:'center',
        color:'#fff'
    },
    googlebox : {
        height : 42,
        width : width*0.65,
        borderRadius : 50,
        display : 'flex',
        flexDirection : 'row',
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#97A8D5",
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    icon : {
        position:'absolute',
        left:-6,
        top:-5
    },
    title : {
        flex : 2,
        alignItems:'center',
        justifyContent:'center'
    },
    googleLogo: {
        width:70,
        height:60,
    }
  });

//make this component available to the app
export default SignUpScreen;

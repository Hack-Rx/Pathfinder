//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity} from 'react-native';

import Svg, {Circle, ClipPath} from 'react-native-svg'
import {Font, AppLoading} from 'expo'
import { useFonts } from '@use-expo/font'
import { NavigationContainer } from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

// create a component
const WelcomeScreen = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        'Avenir': require('../assets/fonts/AvenirLTStd-Roman.otf')
    });
    if(!fontsLoaded){
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>
                <Image
                    source = {require('../assets/header.png')}
                    style={{flex:1, ...styles.header}}
                />
                <Image
                    source = {require('../assets/logo.png')}
                    style={{flex:1, ...styles.logo}}
                />
                <Image
                    source = {require('../assets/right.png')}
                    style={{flex:1, ...styles.rightImg}}
                />
                <Image
                    source = {require('../assets/left.png')}
                    style={{flex:1, ...styles.leftImg}}
                />
                <View style={styles.introText}>
                    <Text style={{color:"#6C86C9", fontSize: 13, left:12, fontFamily: 'Avenir'}}>A brand new app that keeps track {"\n"} of your meals & nutritional needs</Text>
                </View>
                <View style={styles.introText2}>
                    <Text style={{color:"#6C86C9", fontSize: 13, fontFamily: 'Avenir'}}>Get customized workout and diet {"\n"} plans to lead a healthy life</Text>
                </View>

                <TouchableOpacity 
                    style={styles.startBtn}
                    onPress={() => navigation.navigate('RegisterScreen')}
                >
                    <Text style={{color: "#384C86", fontFamily:'Avenir', fontWeight:"500", fontSize:20}}>Get Started</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.signIntext}
                    onPress={() => navigation.navigate('SignInStackScreen')}
                >
                    <Text style={{color: "#6C86C9", fontFamily:'Avenir'}}>
                        Already have an account? <Text style={{color:"#fff", fontWeight:'bold'}}>Sign in</Text>
                    </Text>
                </TouchableOpacity>
            </View>
                
        );
    }
}

// define your styles #E9446A
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#384C86',
    },
    header: {
        flex: 1,
        position: 'absolute',
        top: -680,
        left: -410,
    },
    introText: {
        color:'white',
        position:"absolute",
        top: height*0.45,
        fontSize: 20
    },
    introText2: {
        color:'white',
        position:"absolute",
        bottom: height*.25,
        right:0
    },
    logo: {
        flex: 1,
        position: "absolute",
        height: height*0.2,
        width: width*.95,
        alignSelf: 'center',
        marginTop:150,
    },
    leftImg: {
        flex: 1,
        position: "absolute",
        height: height*.33,
        width: width*.45,
        // right: width*.5,
        left:0,
        bottom: height*.12
    },
    rightImg:{
        flex: 1,
        position: "absolute",
        height: height*0.33,
        width: width*.5,
        left: width* .55,
        top: height*0.35          
    },
    startBtn: {
        flex:1,
        position: "absolute",
        bottom: height*0.08,
        left: width* 0.2,
        height: 42,
        width: width*0.6,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
    },
    signIntext: {
        flex:1,
        position: "absolute",
        bottom: height*0.03,
        left: width* 0.2,
        // alignItems: "center",
        // justifyContent: "center",
        // borderRadius: 30,
    }
});

//make this component available to the app
export default WelcomeScreen;

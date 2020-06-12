//import liraries
import React, { useState } from 'react';
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

const {width, height} = Dimensions.get('window');



const defaultFlag = data.filter(
    (obj) => obj.name === 'India'
)[0].flag

const SignUpScreen = ({ navigation }) => {
    

    let [fontsLoaded] = useFonts({
        'Avenir': require('../../assets/fonts/AvenirLTStd-Roman.otf')
    });

    const [flag, setFlag ] = useState(defaultFlag)
    const [ modalVisible, setModalVisible ] = useState(false)


    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }

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
    
    const countryData = data
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="default"/>
               <Image
                    source = {require('../../assets/header.png')}
                    style={{flex:1, ...styles.headerImg}}
                />

                <View style={styles.form}>

                    <Text style={styles.text_footer}>Sign-Up:</Text>
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
                        onPress={() => navigation.navigate("VerificationScreen")}
                    >
                        <Text style={{color: "#384C86", fontFamily:'Avenir', fontWeight:"500", fontSize:20}}>Sign Up</Text>
                    </TouchableOpacity>

                    <Text style={[styles.text_footer, {marginTop:30, fontWeight:'bold'}]}>OR</Text>
                    <Text style={[styles.text_footer, {marginTop:20}]}>Sign-in with:</Text>

                    <TouchableOpacity 
                        style={styles.googlebox}
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
        // bottom: -width*0.3,
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
        // backgroundColor: '#384C86'
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
        // flex : 1,
        // alignItems : 'center',
        // justifyContent: 'center'
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
        // backgroundColor:'red',
        // marginLeft:-2
    }
  });

//make this component available to the app
export default SignUpScreen;

//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import { useFonts } from '@use-expo/font'
import { Item, Input, Icon } from 'native-base'
import { Hideo, Fumi } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
const {width, height} = Dimensions.get('window');

// create a component
const GenderScreen = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        'Avenir': require('../assets/fonts/AvenirLTStd-Roman.otf')
    });

    const [malecolor, setmaleColor] = useState('white')
    const [femalecolor, setfemaleColor] = useState('white')

    const [name, setName] = useState("")
    const [age, setAge] = useState(null)
    const [gender, setGender] = useState('')


    return (
        <View style={styles.container}>
            <Image
                source = {require('../assets/header.png')}
                style={{flex:1, ...styles.headerImg}}
            />

            <View style={styles.form}>
                <Text style={styles.header}>Help us know you better </Text>

                {/* <View style={styles.action}> */}
                    <Fumi
                        label={'Your Name'}
                        iconClass={FontAwesomeIcon}
                        iconName={'user'}
                        iconColor={'#D3DAEF'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        iconBackgroundColor={'#D3DAEF'}
                        style={styles.nameInput}
                        onChangeText={(text) => {setName(text)}}
                    />

                {/* </View> */}
                <Text style={styles.genderText}>Gender </Text>
                <View style={styles.gender}>
                    
                    <TouchableOpacity 
                        onPress={() => {
                            setmaleColor('red')
                            setGender("male")
                            if(femalecolor === "red")
                                setfemaleColor("#fff")
                        }}
                    >
                        <Image
                        source = {require('../assets/Male.png')}
                        style={[styles.genderLogo,{marginRight:20}]}
                        resizeMode="cover"
                        />
                    </TouchableOpacity>

                    <Text style={styles.vertBar}>|</Text>
                    <TouchableOpacity 
                        onPress={() => {
                            setfemaleColor('red')
                            setGender("female")
                            if(malecolor === "red")
                                setmaleColor("#fff")
                        }}
                    >
                        <Image
                        source = {require('../assets/Female.png')}
                        style={[styles.genderLogo, {marginLeft:20}]}
                        resizeMode="cover"
                        />
                    </TouchableOpacity>

                </View>
                <View style={[styles.gender, {marginTop: -10}]}>
                    <Text style={{color:malecolor, marginRight: 50}}>Male</Text>
                    <Text style={{color:femalecolor, marginLeft: 50}}>Female</Text>
                </View>

                <View style={{flexDirection:'row', marginTop:30}}>
                    <Text style={styles.ageText}>Age</Text>
                    <TextInput 
                        placeholder="XX"
                        style={styles.ageInput}
                        keyboardType="number-pad"
                        onChangeText={(text) => {setAge(text)}}
                    />
                </View>

                <TouchableOpacity 
                    style={styles.startBtn}
                    onPress={() => navigation.navigate("UserDetailsScreen", {
                        name:name,
                        age: age,
                        gender: gender
                    })}
                >
                    <Text style={{color: '#fff', fontWeight:'bold', fontSize:20}}>Next</Text>
                </TouchableOpacity>

                <Image
                    source = {require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="cover"
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    action: {
        paddingBottom: 5,
        width:width*.9,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#384C86'
    },
    ageText: {
        color: '#97A8D5',
        fontSize: 25,
        marginTop: 5,
        // marginLeft: -30
        paddingRight: 20
    },
    ageInput: {
        padding: 10,
        height: 50,
        fontSize: 25,
        color: '#fff',
        borderBottomWidth: .5,
        borderBottomColor: '#97A8D5'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#384C86',
    },
    form: {
        flex: 1,
        top: height*0.2,
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gender: {
        flexDirection:'row',
    },
    genderLogo: {
        height: 80,
        width: 80,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
    },
    genderText: {
        color: '#97A8D5',
        fontSize: 22,
        marginTop: 25,
    },  
    header: {
        color: '#97A8D5',
        fontFamily:'Avenir',
        fontSize: 25,
    },
    headerImg: {
        flex: 1,
        position: 'absolute',
        top: -700,
        left: -380,
    },
    iconStyle: {
        color: '#97A8D5',
        fontSize: 28,
        marginLeft: 0,
        paddingRight:6
    },
    itemStyle: {
        marginBottom: 10,
    },
    logo: {
        width: width*.5,
        bottom: 0,
        height:height*0.08,
        // backgroundColor:'red',
        marginTop: 20
    },
    nameInput: {
        marginTop: 30,
        padding: 5,
        backgroundColor: '#97A8D5' ,
        borderRadius: 20,
        color: '#fff',
        fontWeight: "100",
        width:width*.9,
        fontSize: 20
    },
    startBtn: {
        marginTop: 30,
        height: 45,
        width: width*.4,
        backgroundColor: "#6178B8",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        padding: 10,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    textInput: {
        flex: 1,
        width: width*0.8,
        height: 20,
        paddingLeft: 10,
        color:'#fff',
        fontSize: 20
    },
    vertBar: {
        fontSize: 55,
        color: '#97A8D5'
    }
});

//make this component available to the app
export default GenderScreen;

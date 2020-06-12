//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from '@use-expo/font'


const {width, height} = Dimensions.get('window');


// create a component
const VerificationScreen = ({ route, navigation }) => {


    let [fontsLoaded] = useFonts({
        'Avenir': require('../../assets/fonts/AvenirLTStd-Roman.otf')
    });

    const [verificationCode, setVerificationCode] = React.useState("");

    return (
        <View style={styles.container}>
            <Image
                source = {require('../../assets/header.png')}
                style={{flex:1, ...styles.headerImg}}
            />
            <View style={styles.form}>
                <Text style={styles.header}>Please Enter Verification {"\n"}<Text style={{alignItems:'center'}}>Code</Text> </Text>

                <View style={styles.action}>
                    <TextInput 
                        style={styles.textInput}
                        keyboardType="number-pad"
                    />
                </View>

                <TouchableOpacity 
                    style={styles.startBtn}
                >
                    <Text style={{color: "#fff", fontFamily:'Avenir', fontWeight:"500", fontSize:20}}>Confirm</Text>
                </TouchableOpacity>

                <Image
                    source = {require('../../assets/logo.png')}
                    style={{flex:1, ...styles.logo}}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    action: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        width:width*0.6
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#384C86',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    form: {
        flex: 1,
        top: height*0.25,
        alignItems:'center',
        justifyContent:'center'
    },
    header: {
        color: '#97A8D5',
        fontFamily:'Avenir',
        fontSize: 25,
    },
    headerImg: {
        flex: 1,
        position: 'absolute',
        top: -680,
        right: -450,
    },
    logo: {
        height: height*0.1,
        width: width*.5,
        bottom: 0,
    },
    startBtn: {
        marginTop: 40,
        height: 42,
        width: width* .6,
        backgroundColor: "#97A8D5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    textInput: {
        flex: 1,
        width: width*0.6,
        height: 20,
        paddingLeft: 10,
        color:'#fff',
        fontSize: 20,
        paddingLeft:40
    }
});

//make this component available to the app
export default VerificationScreen;

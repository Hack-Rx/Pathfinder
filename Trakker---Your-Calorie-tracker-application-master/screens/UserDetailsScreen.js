//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';

import { useFonts } from '@use-expo/font'
import { Item, Input, Icon } from 'native-base'
import { Hideo, Fumi } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
const {width, height} = Dimensions.get('window');

// create a component
const UserDetailsScreen = ({ route, navigation }) => {

    let [fontsLoaded] = useFonts({
        'Avenir': require('../assets/fonts/AvenirLTStd-Roman.otf')
    });

    const [ modalVisible, setModalVisible ] = useState(false)
    const [userHeight, setUserHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [lifeStyle, setLifeStyle ] = useState('')

    const { name } = route.params;
    const { age } = route.params;
    const { gender } = route.params;

    const showModal = () => {
        setModalVisible(true);
    }

    const hideModal = () => {
        setModalVisible(false);
    }


    return (
        <View style={styles.container}>
            <Image
                source = {require('../assets/header.png')}
                style={{flex:1, ...styles.headerImg}}
                // resizeMode="contain"
            />

            <View style={styles.form}>
                <Text style={styles.header}>Setting Up</Text>
                    <Item 
                        // rounded 
                        style={styles.itemStyle}
                    >
                        <Image 
                            source={require('../assets/height.png')}
                            style={styles.iconStyle}
                        />

                        <Input 
                            style={styles.inputStyle}
                            placeholder="Height in centimeter"
                            placeholderTextColor="#6178B8"
                            keyboardType={'phone-pad'}
                            returnKeyType='done'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            onChangeText={(text) => setUserHeight(text)}
                        />
                    </Item>

                    <Item 
                        // rounded 
                        style={styles.itemStyle}
                    >
                        <Image 
                            source={require('../assets/weight.png')}
                            style={styles.iconStyle}
                        />
                        <Input 
                            style={styles.inputStyle}
                            placeholder="Body-weight in Kg"
                            placeholderTextColor="#6178B8"
                            keyboardType={'phone-pad'}
                            returnKeyType='done'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={false}
                            onChangeText={(text) => setWeight(text)}
                        />
                    </Item>

                <Text style={styles.genderText}>For more Accuracy</Text>
                <View style={styles.gender}>
                    
                    <TouchableOpacity 
                        underlayColor={'gray'}
                        style={styles.fatBtn}
                    >
                        <Text style={{color: '#fff', fontWeight:'bold', fontSize:15}}>Calculate Body Fat %</Text>
                    </TouchableOpacity>
                </View>

                <Item style={styles.itemStyleLife}>
                    <View><Text style={{fontSize:20, color:'#fff'}}>Lifestyle</Text></View>
                    <View style={styles.icon}>
                        <Icon
                            active
                            name='md-arrow-dropdown'
                            style={[styles.iconStyleLife, { marginLeft: 5 }]}
                            onPress={() => showModal()}
                        />
                    </View>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                    >
                        <View style={{ flex: 1, backgroundColor:'#000000aa' }}>
                            <View style={styles.modalStyle}>
                            <FlatList
                                data={[{"name":'Sedentary', "des":'little or no exercise'}, 
                                        {"name":'Light',"des":'1-3 days of exercise per week' }, 
                                        {"name":'Moderate', "des": '4-5 days of exercise per week'}, 
                                        {"name": "Intense", "des": '6-7 days of exercise per week'}, 
                                        {"name": "Hard Exercise", "des": '2x exercise per day'}]}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={
                                ({ item }) =>
                                    <TouchableOpacity 
                                        onPress={() => {
                                            setLifeStyle(item.name);
                                            hideModal();    
                                        }}
                                        style={styles.lifeStyleBtn}
                                    >
                                        <Text style={{color: '#97A8D5', fontWeight:'bold', fontSize:25}}>
                                        {item.name}
                                        </Text>
                                        <Text style={{color: "#D3DAEF", fontSize:15}}>{item.des}</Text>

                                    </TouchableOpacity>
                                }
                            />
                            </View>
                        </View>
                    </Modal>
                </Item>

                <TouchableOpacity
                    style={styles.startBtn}
                    onPress={() => {navigation.navigate("SettingTargetScreen", {
                        userHeight: userHeight,
                        weight: weight,
                        name: name,
                        age: age,
                        gender: gender,
                        lifeStyle: lifeStyle
                    })}}
                >
                    <Text style={{color: '#fff', fontWeight:'bold', fontSize:20}}>Next</Text>
                </TouchableOpacity>
                {/* <Text>Hello</Text> */}
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
    },
    ageInput: {
        paddingLeft: 30,
        height: 50,
        fontSize: 25,
        color: '#fff'
    },
    closeButtonStyle: {
        padding: 10,
        backgroundColor: '#6178B8',
        alignItems: 'center',
        justifyContent:'center',
        color:'#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#384C86',
    },
    fatBtn: {
        marginTop: 10,
        height: 45,
        width: width*.6,
        backgroundColor: "#6178B8",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    form: {
        flex: 1,
        position:"absolute",
        top: height*0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gender: {
        flexDirection:'row',
    },
    genderLogo: {
        height: 100,
        width: 80,
    },
    genderText: {
        color: '#97A8D5',
        fontSize: 16,
        marginTop: 25,
        fontWeight:'200'
    },  
    header: {
        color: '#97A8D5',
        fontFamily:'Avenir',
        fontSize: 25,
        marginTop:0
    },
    headerImg: {
        flex: 1,
        position: 'absolute',
        top: -700,
        left: -380,
    },
    icon: {
        position:'absolute',
        right:-6,
        // top:-5
    },
    iconStyle: {
        marginLeft: 15,
        marginRight:10,
        padding:10
    },
    iconStyleLife: {
        marginLeft: 15,
        marginRight:10,
        padding:10,
        color:'#fff'
    },
    inputStyle: {
        flex: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        paddingLeft:20,
        padding: 5,
        borderWidth:0
    },
    itemStyle: {
        marginTop: 10,
        width: width*0.7,
        height: 45,
        borderRadius: 10,
        borderBottomWidth: 0,
        elevation:0,
        // backgroundColor:'red'
    },
    itemStyleLife: {
        marginTop: 30,
        width: width*0.6,
        height: 45,
        borderRadius: 10,
        borderBottomWidth: 0,
        elevation:0,
        backgroundColor:'#6178B8',
        alignItems:'center',
        justifyContent: 'center'
    },
    lifeStyleBtn: {
        marginTop: 10,
        height: 80,
        width: width*0.7,
        backgroundColor: "#6178B8",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding:10,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    logo: {
        height: height*0.08,
        width: width*.5,
        // bottom: -width*0.1,
        marginTop:20
        // backgroundColor: 'red',
    },
    modalStyle: {
        flex: 1, 
        paddingTop: 40, 
        backgroundColor:'#384C86', 
        borderRadius: 20, 
        width: width*.84, 
        marginLeft: width*0.08,
        marginRight: width*0.08,
        marginTop: height*0.08,
        marginBottom: height*0.08,
        alignItems:'center',
        justifyContent:'center'
    },
    nameInput: {
        marginTop: 20,
        padding: 5,
        backgroundColor: '#97A8D5',
        borderRadius: 10,
        color: '#fff',
        fontWeight: "100",
        width:width*.7,
        height: 10
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
});

//make this component available to the app
export default UserDetailsScreen;

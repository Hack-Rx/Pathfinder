//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import * as firebase from 'firebase'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

const uid = "LbJFZzdGHidYzG2HL1OQTV5R8qb2"


// create a component
const PostsScreen = () => {

    const [image, setImage ] = useState('')
    const [text, setText] = useState('')

    const uploadPhotoAsync = async uri => {

        const path = 'photos/${uid}/${Date.now()}.jpg'

        return new Promise(async (res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase   
                            .database()
                            .ref(path)
                            .update(file)

            upload.on(
                "state-changed",
                snapshot => {},
                err => {
                    rej(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                    res(url);
                }
            );
        })
    }

    const addPost = async ({ text, localUri }) => {
        const remoteUri = await uploadPhotoAsync(localUri)

        return new Promise((res, rej) => {
            firebase.database.ref("posts").add({
                text, 
                uid: uid,
                timestamp: Date.now(),
                image: remoteUri
            })
            .then(ref => {
                res(ref)
            })
            .catch(error => {
                rej(error)
            })
        })
    } 

    const getPhotoPermission = async () => {
        if(Constants.platform.android) {
            const {status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

            if(status != "granted") {
                alert("We need permission to access your camera roll");
            }
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3]
        });

        if(!result.cancelled) {
            setImage(result.uri)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="md-arrow-back" size={24} color="#D8D9DB"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontWeight: "500"}}>Post</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <Image 
                    source={require('../../assets/profile.png')}
                    style={styles.avatar}
                />
                <TextInput 
                    autoFocus={true}
                    multiline={true}
                    numberOfLines={4}
                    style={{ flex : 1 }}
                    placeholder="Want to share something"
                >

                </TextInput>
            </View>

            <TouchableOpacity style={styles.photo} onPress={pickImage}>
                <Ionicons name="md-camera" size={32} color="#D8D9DB"></Ionicons>
            </TouchableOpacity>

            <View style={{ marginHorizontal: 32, marginTop: 32, height: 150}}>
                <Image 
                    source={{uri: image}}
                    style={{width: "100%", height: "100%"}}
                />
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#fff',
    },
    header: {
        flexDirection:'row',
        justifyContent: "space-between",
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#D8D9DB"
    },
    inputContainer: {
        margin: 32,
        flexDirection: "row"
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16
    },
    photo: {
        alignItems: 'flex-end',
        marginHorizontal: 32
    }
});

//make this component available to the app
export default PostsScreen;

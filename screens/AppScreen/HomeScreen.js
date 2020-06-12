//import liraries
import React, { Component, useContext} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../navigation/AuthProvider'

const {width, height} = Dimensions.get('window');

// create a component
const HomeScreen = () => {

    const { user, logout } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <Text>Welcome User</Text>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => logout()}
            >
                <Text style={{color:'white'}}>Sign out 🤷</Text>
            </TouchableOpacity>
        </View>

        
    );
};

// define your styles
const styles = StyleSheet.create({
    button:{
        marginTop: 40,
        height: 42,
        width: width* .7,
        backgroundColor: "#384C86",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default HomeScreen;

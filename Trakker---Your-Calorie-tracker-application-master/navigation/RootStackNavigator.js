//import liraries
import React, { useState, useEffect, createContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Firebase from '../config/Firebase'

import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

import HomeScreen from '../screens/HomeScreen'

const RootStack = createStackNavigator()

// create a component
// const AppStack = createStackNavigator()


export const AuthContext = createContext(null)

const RootStackScreen = ({navigation}) => {
    
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)

    //Handle user state changes
    function onAuthStateChanged(result) {
        setUser(result)
        if(initializing)
            setInitializing(false)
    }

    useEffect(() => {
        const authSubscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged)

        return authSubscriber
    }, [])

    if(initializing) {
        return null
    }
    
    return(
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen 
                name="WelcomeScreen" 
                component={WelcomeScreen} 
                
            />
            <RootStack.Screen 
                name="SignUpScreen" 
                component={SignUpScreen} 

            />                        
            <RootStack.Screen 
                name="SignInScreen" 
                component={SignInScreen} 

            />            
        </RootStack.Navigator>
    )
        // <RootStack.Navigator>
        //     {isLoggedIn ? (
        //         <>
        //             <RootStack.Screen 
        //                 name="app"
        //                 component={AppStackScreen}
        //             />
        //         </>
        //     ) : (
        //         <RootStack.Screen 
        //             name="auth"
        //             component={AuthStackScreen}
        //         />
            
        //     )}
        // </RootStack.Navigator>
    // )
    // return user ? (
    //     <AuthContext.Provider value={user}>
    //         <AppStackScreen />
    //     </AuthContext.Provider>
    // ) : (
    //     <AuthStackScreen />
    // )
}


//make this component available to the app
export default RootStackScreen;

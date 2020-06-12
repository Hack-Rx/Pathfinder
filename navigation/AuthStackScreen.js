import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import WelcomeScreen from '../screens/AuthenticationScreen/WelcomeScreen'
import SignInScreen from '../screens/AuthenticationScreen/SignInScreen'
import SignUpScreen from '../screens/AuthenticationScreen/SignUpScreen'
import VerificationScreen from '../screens/AuthenticationScreen/VerificationScreen';

const AuthStack = createStackNavigator()
const RegisterStack = createStackNavigator()
const SignInStack = createStackNavigator()

const RegisterStackScreen = ({ navigator }) => {
    return (
        <RegisterStack.Navigator headerMode='none'>
            <RegisterStack.Screen 
                name="SignUpScreen"
                component={SignUpScreen}
            />
            <RegisterStack.Screen 
                name="VerificationScreen"
                component={VerificationScreen}
            />
        </RegisterStack.Navigator>
    )
}

const SignInStackScreen = () => {
    return (
        <SignInStack.Navigator headerMode='none'>
            <SignInStack.Screen 
                name="SignInScreen"
                component={SignInScreen}
            />
            <SignInStack.Screen 
                name="VerificationScreen"
                component={VerificationScreen}
            />
        </SignInStack.Navigator>
    )
}


const AuthStackScreen = ({navigator}) => {
    return(
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen 
                name="WelcomeScreen"
                component = {WelcomeScreen}
            />
            <AuthStack.Screen 
                name="RegisterScreen"
                component = {RegisterStackScreen}
            />
            <AuthStack.Screen 
                name="SignInStackScreen"
                component = {SignInStackScreen}
            />
            
        </AuthStack.Navigator>
    )
}

export default AuthStackScreen;
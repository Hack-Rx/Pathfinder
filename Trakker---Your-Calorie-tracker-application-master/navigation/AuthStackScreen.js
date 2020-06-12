import {createStackNavigator} from '@react-navigation/stack'
import React, { useState, useEffect, createContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import WelcomeScreen from '../screens/WelcomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import VerificationScreen from '../screens/VerficationScreen';
import GenderScreen from '../screens/GenderScreen'
import UserDetailsScreen from '../screens/UserDetailsScreen'
import SettingTargetScreen from '../screens/SettingTargetScreen'

const AuthStack = createStackNavigator()
const RegisterStack = createStackNavigator()
const SignInStack = createStackNavigator()
const ProfileSetupStack = createStackNavigator()

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

export const ProfileSetupStackScreen = () => {
    return (
        <ProfileSetupStack.Navigator headerMode='none'>
            
            <ProfileSetupStack.Screen 
                name="GenderScreen"
                component={GenderScreen}
            />
            <ProfileSetupStack.Screen 
                name="UserDetailsScreen"
                component={UserDetailsScreen}
            />
            <ProfileSetupStack.Screen 
                name="SettingTargetScreen"
                component={SettingTargetScreen}
            />
        </ProfileSetupStack.Navigator>
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
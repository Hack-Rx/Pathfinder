import {createStackNavigator} from '@react-navigation/stack'
import React, { useState, useEffect, createContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen'
import BottomTabNavigator from '../screens/homeScreens/BottomTabNavigator'

const AppStack = createStackNavigator()

const AppStackScreen = ({navigator}) => {
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="Home"
                component = {HomeScreen}
            />
        </AppStack.Navigator>
    )
}


export default AppStackScreen;
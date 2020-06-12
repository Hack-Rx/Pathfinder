import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'


import HomeScreen from '../HomeScreen'
import ProfileScreen from './ProfileScreen'
import RandomScreen from './RandomScreen'
import AddMeal from './AddMeal';
import FlatListDemo from './ExtraScreen'
import StatsPage from './StatsPage'
import SkinTestMale from '../SkinTestMale'

const AppStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator()

const AppStackScreen = ({navigator}) => {
    
    return(
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen 
                name="Home"
                component = {BottomTabNavigator}
            />
        </AppStack.Navigator>
    )
}

const HomeStackScreen = ({ navigator }) => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen 
        name="HomeScreen"
        component={HomeScreen}
        headerMode="none"
      />
      <HomeStack.Screen 
        name="AddMealScreen"
        component={AddMeal}
      />
      <HomeStack.Screen 
        name="Extra"
        component={FlatListDemo}
      />
    </HomeStack.Navigator>
  )
}

const BottomTabNavigator = () =>  {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#161F2D"
      backgroundColor="#fff"
      barStyle={{ backgroundColor: '#4B6AFC' }}
      options= {{
          showLabel: false
      }}
    >
      <Tab.Screen
        name="Stat"
        component={SkinTestMale}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="home" color={color} size={26} />
            <Image 
              source={require('../../assets/stat.png')}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Exercises"
        component={FlatListDemo}
        options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="football" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          // tabBarLabel: 'Posts',
          tabBarIcon: ({ color }) => (
            <Image 
              source={require('../../assets/home.png')}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Connections"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Connections',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
            
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="account" color={color} size={26} />
            <Image 
              source={require('../../assets/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStackScreen
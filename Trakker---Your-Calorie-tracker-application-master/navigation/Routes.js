import React, { useContext, useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Firebase from '../config/Firebase'


import AuthStackScreen, {ProfileSetupStackScreen} from './AuthStackScreen'
import AppStackScreen from '../screens/homeScreens/BottomTabNavigator'

import Loading from '../screens/LoadingScreen'

import { AuthContext } from './AuthProvider'

import PostsScreen from '../screens/homeScreens/PostsScreen'
import SkinTestFemale from '../screens/SkinTestMale'

export default function Routes() {
    const { user, setUser, newUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);
    
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
      setLoading(false);
    }
    
    useEffect(() => {
      const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);

    if (loading) {
      return <Loading />;
    }
    user
    return (
      <NavigationContainer>
        {/* {(user) ? ((!newUser) ? <AppStackScreen /> : <ProfileSetupStackScreen />) : <AuthStackScreen />} */}
        {/* {(newUser) ? <ProfileSetupStackScreen /> : <AuthStackScreen />} */}
        {/* {(user) ? <AppStackScreen /> : <AuthStackScreen />} */}
        {/* <ProfileSetupStackScreen /> */}
        {/* <AuthStackScreen /> */}
        {/* <AppStackScreen /> */}
        {/* <PostsScreen /> */}
        <SkinTestFemale />
      </NavigationContainer>
    );

  }
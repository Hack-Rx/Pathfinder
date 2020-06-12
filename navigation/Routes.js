import React, { useContext, useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Firebase from '../config/Firebase'


import AuthStackScreen from './AuthStackScreen'
import HomeScreen from '../screens/AppScreen/HomeScreen'

import Loading from '../screens/AuthenticationScreen/LoadingScreen'

import { AuthContext } from './AuthProvider'


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
        {(user) ? <HomeScreen /> : <AuthStackScreen />}
      </NavigationContainer>
    );

  }
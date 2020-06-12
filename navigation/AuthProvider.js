import React, { createContext, useState, useRef } from 'react';
import Firebase from '../config/Firebase'
import * as firebase from 'firebase'

export const AuthContext = createContext({});

const firebaseConfig = {
  apiKey: "AIzaSyBzuL4r3YG7BDdq1MDjd2C-10LHxfbCqT8",
  authDomain: "trakker-e141d.firebaseapp.com",
  databaseURL: "https://trakker-e141d.firebaseio.com",
  projectId: "trakker-e141d",
  storageBucket: "trakker-e141d.appspot.com",
  messagingSenderId: "285618643406",
  appId: "1:285618643406:web:ba2eed02836f16148fcb9f",
  measurementId: "G-K0S40CMVG7"
};


if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isVerified, setIsVerified ] = useState(false);
    const [verificationId, setVerificationId] = useState(null)
    const [verificationCode, setVerificationCode] = React.useState("");
    const recaptchaVerifier = useRef(null)
    const [newUser , setNewUser ] = useState(false)
    // const [userResult, setUserResult ] = useState(null)

    const isUserEqual = (googleUser, firebaseUser) => {
      if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
          if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
              providerData[i].uid === googleUser.getBasicProfile().getId()) {
            // We don't need to reauth the Firebase connection.
            return true;
          }
        }
      }
      return false;
    }


    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          newUser,
          setNewUser,
          onSignIn: (googleUser) => {
            var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
              unsubscribe();
              if (!isUserEqual(googleUser, firebaseUser)) {
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    googleUser.idToken,
                    googleUser.accessToken
                );
                firebase
                    .auth()
                    .signInWithCredential(credential)
                    .then(function( result ) {
                        console.log('USer Signed in');
                        if(result.additionalUserInfo.isNewUser)
                        {
                            setNewUser(true)
                            console.log('New user set');

                            firebase.database().ref('users/' + result.user.uid)
                            .set({
                                id: result.user.uid,
                                gmail:result.user.email,
                                created_at: Date.now()
                            })
                            .then(function(snapshot) {
                                // console.log('snapshot', snapshot);
                                console.log("Here")
                            });
                        } else {
                            firebase
                            .database()
                            .ref('users/' + result.user.uid)
                            .update({
                                last_logged_in: Date.now(),
                            })
                            .then(function(snapshot) {
                                console.log('snapshot', snapshot);
                            });
                        }
                        
                    })
              
                .catch(function(error) {
                  alert('error')
                });
              }
            });
          },
          logout: async () => {
            try {
              await Firebase.auth().signOut();
              setIsVerified(false);
            } catch (e) {
              console.error(e);
            }
          }
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

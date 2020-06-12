import * as firebase from 'firebase'


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

const Firebase = firebase.initializeApp(firebaseConfig)


export {firebaseConfig}

export default Firebase;
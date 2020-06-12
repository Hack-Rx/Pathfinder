//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , ActivityIndicator} from 'react-native';

// create a component
class Loading extends Component {
    render() {
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size="large" />
        </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Loading;

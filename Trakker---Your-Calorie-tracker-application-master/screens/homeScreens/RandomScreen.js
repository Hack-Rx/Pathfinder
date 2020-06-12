import React, { Component, useState } from 'react';

import { StyleSheet, View ,SafeAreaView,Text ,TouchableOpacity, Image,ScrollView } from 'react-native';
import { Dimensions } from "react-native";
import { ProgressChart,} from "react-native-chart-kit";
import { Feather } from '@expo/vector-icons';

import AddMeal from './AddMeal'

const screenWidth = Dimensions.get("window").width;


const {width, height} = Dimensions.get('window');

const data = {
  labels: ["Swim"], // optional
  data: [0.4]
};

const chartConfig = {
  backgroundColor: 'white',
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};


const RandomScreen = ({ navigation }) => {
    
    return (
        <View style={styles.fullContainer}>
            <View style={styles.container} >
                <View style={styles.background} >
                    <View style={styles.image}>
                        <ProgressChart
                            data={data}
                            width={screenWidth}
                            height={250}
                            strokeWidth={12}
                            radius={75}
                            chartConfig={chartConfig}
                            hideLegend={true}
                            style={styles.chart}
                        />
                        <Text style={{color:'white',fontSize:22, fontWeight:'bold'}}>1410 kcal</Text>
                        <Text style={{fontSize:12, color:'#fff'}}>CONSUMED</Text>
                    </View>

                </View>

                <View style={styles.leftCalorie}>
                    <Text style={{fontSize:20, color:'#fff',fontWeight:'bold'}}>1535 <Text style={{fontSize:14}}>kcal</Text></Text>
                    <Text style={{fontSize:12, color:'#fff', left: 15}}>LEFT</Text>
                </View>
                <View style={styles.burntCalorie}>
                    <Text style={{fontSize:20, color:'#fff', fontWeight:'bold'}}>330 <Text style={{fontSize:14}}>kcal</Text></Text>
                    <Text style={{fontSize:12, color:'#fff'}}>BURNED</Text>
                </View>

                <View style={styles.compositionTab}>
                    <View style={styles.composition}>
                        <Text style={{fontSize:14, color:'#fff',fontWeight:'bold'}}>51g</Text>
                        <Text style={{fontSize:16, color:'#fff',fontWeight:'bold'}}>CARBS</Text>
                    </View>
                    <View style={styles.composition}>
                        <Text style={{fontSize:14, color:'#fff',fontWeight:'bold'}}>55g</Text>
                        <Text style={{fontSize:16, color:'#fff',fontWeight:'bold'}}>PROTEIN</Text>
                    </View>
                    <View style={styles.composition}>
                        <Text style={{fontSize:14, color:'#fff',fontWeight:'bold'}}>35g</Text>
                        <Text style={{fontSize:16, color:'#fff',fontWeight:'bold'}}>FATS</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.plus} onPress={() => navigation.navigate("AddMealScreen")}>
                <Image 
                    source={require('../../assets/plus.png')}
                />
            </TouchableOpacity>

            <ScrollView>
                <View style={styles.trackWater}>
                    <Text style={{color: '#506CFB',fontSize:18, fontWeight:'bold'}}>
                        Track water intake
                    </Text>
                    <View style={styles.glasses}>
                        <Image 
                            source={require('../../assets/emptyGlass.png')}
                        />
                        <Image 
                            source={require('../../assets/emptyGlass.png')}
                        />
                        <Image 
                            source={require('../../assets/emptyGlass.png')}
                        />
                        <Image 
                            source={require('../../assets/emptyGlass.png')}
                        />
                        <Image 
                            source={require('../../assets/emptyGlass.png')}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({

    background: { // this shape is a circle 
        borderRadius: width,
        width: width * 2,
        height: width * 2,
        marginLeft: -(width / 2),
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',
        backgroundColor:'#E4EBFF'
    },
    burntCalorie: {
        top:height*0.15,
        left: width*0.35,
        alignItems:'center',
        justifyContent:'center'
    },
    chart: {
        position:"absolute",
        // top: height*0.06,
        left:width*0.1,
        
    },
    container: {
        alignSelf: 'center',
        width: width,
        overflow: 'hidden',
        height: width / 1
    },
    compositionTab: {
        position:'absolute',
        top: height*0.36,
        flexDirection:'row',
        justifyContent:'center',
        margin: 32
    },
    composition: {
        flex: 1,
        alignItems:'center'
    },
    fullContainer: {
        backgroundColor:'#E4EBFF',
        flex:1,
        alignItems:'center',
        // justifyContent:'center'
    },
    glasses: {
        flexDirection:'row',
        backgroundColor:'#eeea',
        marginTop: 10
    },
    image: {
        height: width / 1,
        width: width,
        position: 'absolute',
        bottom: 0,
        marginLeft: width / 2,
        backgroundColor: '#4B6AFC',
        alignItems:'center',
        justifyContent:'center'
    },
    leftCalorie: {
        top:height*0.2,
        left: width*0.02,
        // alignItems:'center',
        justifyContent:'center'
    },
    plus: {
        top:-height*0.05,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    trackWater: {
        marginTop: -15,
        marginLeft: -20,
        // backgroundColor: '#336699aa',
        width: width*0.8,
        height: height*0.18,
        padding: 10
    }
});

export default RandomScreen;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState,useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    FlatList
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ApiIntegration from '../Utils/ApiIntegration'
// eslint-disable-next-line no-unused-vars
import Myheader from './Header'
const Chart = (props) => {


    return (
        <ScrollView>
            <Myheader passNavData={props.navigation}/>
            <View style={styles.mainView}>
                <Text>
                    Chart
                </Text>

            </View>

        </ScrollView>
    );



};

export default Chart;
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center'
    },
    mainBox:{
        flex:1,
        paddingTop:30,
        paddingBottom:30,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderRadius:4,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        marginBottom:15,
    },
    myText:{
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    myValue:{
        fontSize: 25,
        fontWeight: '800',
        color: Colors.dark,
    },
    buttons:{
        flex:1,
        flexDirection:'row-reverse',
        marginBottom: 20,
        position:'relative',
        right:10,

    }

});

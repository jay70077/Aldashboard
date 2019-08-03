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
    Image
} from 'react-native';

const Myheader = () => {

    return (
            <View style={styles.mainView}>
                 <View style={{paddingLeft:10,paddingTop:15}}>
                     <Image
                         style={{width: 30, height: 30,borderRadius:15}}
                         source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                     />
                 </View>
            </View>

    );



};

export default Myheader;
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        height:60,
        flexDirection:'row',
        backgroundColor:'blue',
        marginBottom:20,
    }

});

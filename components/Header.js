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

const Header = () => {

    return (
            <View style={styles.mainView}>
                 <View style={{position:'relative',left:'10'}}>
                     <Image
                         style={{width: 50, height: 50}}
                         source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                     />
                 </View>
            </View>

    );



};

export default Header;
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        height:80,
        flexDirection:'row',
        backgroundColor:'gray'
    }

});

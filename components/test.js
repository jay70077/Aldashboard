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
    StatusBar,
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
const Test = () => {


    return (
        <View style={styles.mainView}>
         <Text>
             test
         </Text>
        </View>
    );
};

export default Test;
const styles = StyleSheet.create({
    mainView:{
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    }
});

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
const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        ApiIntegration.dashboardApi()
            .then((response)=>{
                console.log('response',response);
                setData(response.data);
            }).catch((err)=>{
            console.log('error',err);
        });

    });


    return (
        <View style={styles.mainView}>
            {/*{data}*/}
            <Text style={styles.myText}> hlkjlkjljk{data.author}</Text>
            <Text style={styles.myText}> {data.length == 0 ? '' : data.data.digital_count}</Text>
            <Text style={styles.myText}>{data.length == 0? '' : data.data.ff_count}</Text>
            <Text style={styles.myText}>{data.length == 0 ? '' : data.data.f2f_count}</Text>
        </View>
    );



};

export default Dashboard;
const styles = StyleSheet.create({
    mainView:{

        flex:1,
        justifyContent:'center'
    },
    myText:{
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    }
});

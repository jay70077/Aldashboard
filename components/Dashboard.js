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
                setData(response);
            }).catch((err)=>{
            console.log('error',err);
        });

    });

    renderItem=(data)=>{
       return(
           <ScrollView>
               {data}
           </ScrollView>
       )
    };

    return (
        <ScrollView>
            <FlatList
                data={data}
                renderItem={this.renderItem}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    }
});

export default Dashboard;

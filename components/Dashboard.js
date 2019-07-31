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
             <View style={styles.mainView}>
                <Text style={styles.mainView}> hlkjlkjljk{data.data.author}</Text>
                <Text style={styles.mainView}> {data.data.data.digital_count}</Text>
                 <Text style={styles.mainView}>{data.data.data.ff_count}</Text>
                 <Text style={styles.mainView}>{data.data.data.f2f_count}</Text>
             </View>
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

export default Dashboard;
const styles = StyleSheet.create({
    mainView:{
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    }
});

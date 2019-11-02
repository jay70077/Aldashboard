/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import PureChart from 'react-native-pure-chart';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    FlatList
} from 'react-native';

export default class BarChart extends Component {
    render(){
        let sampleData = [
            {
                seriesName: 'series1',
                data: [
                    {x: '2018-02-01', y: 30},
                    {x: '2018-02-02', y: 200},
                    {x: '2018-02-03', y: 170},
                    {x: '2018-02-04', y: 250},
                    {x: '2018-02-05', y: 10}
                ],
                color: '#297AB1'
            },
            {
                seriesName: 'series2',
                data: [
                    {x: '2018-02-01', y: 20},
                    {x: '2018-02-02', y: 100},
                    {x: '2018-02-03', y: 140},
                    {x: '2018-02-04', y: 550},
                    {x: '2018-02-05', y: 40}
                ],
                color: 'yellow'
            }
        ]
        return (
            <View style={styles.mainView}>
                <PureChart data={sampleData} type='bar' />

            </View>
        );

    }


};


const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        marginTop:20
    },
    chart: {
        width: 200,
        height: 200,
    },
});

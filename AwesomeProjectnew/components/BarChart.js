/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import PureChart from 'react-native-pure-chart';
const myData = require( '../Utils/data.json');
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
    dataFunction(){
        return(
            myData.data.map((data)=>{
                console.log(data.ff_count);
                return (
                    <Text>
                        {
                            data.ff_count
                        }
                    </Text>
                )
            })
        )
    }

    render(){
        myData.data.map((data)=>{
            console.log(data.ff_count);
            return(
                <Text>
                    x : {data.ff_count}
                    y : {data.no_min}
                </Text>
            )
        })
        let sampleData = [
            {
                seriesName: 'series1',
                data: [
                    {x: 'ff_count', y:  10},
                    {x: 'zoom', y: 200},
                ],
                color: '#297AB1'
            }
        ];
        return (
            <View style={styles.mainView}>
                <PureChart data={sampleData} type='bar' />
                {
                    this.dataFunction()
                }
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

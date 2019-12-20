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

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state={
            sampleData:[]
        }
    }

    renderItem(data) {
        console.log('data',data);
        debugger;
        console.warn('data',data);

    };
     render(){
        return (
            <View style={styles.mainView}>
                <FlatList
                    data={myData.data3}
                    renderItem={(data) => this.renderItem(data)}/>
            </View>
        );

    }

};


const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        paddingTop:50
    },
    chart: {
        width: 200,
        height: 300,
        marginTop: 50,
    },
});

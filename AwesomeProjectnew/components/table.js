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
        return(
            <View>
                  <Text style={styles.tableBorder}>
                      {data.item.training_event}
                  </Text>
                <Text style={styles.tableBorder}>
                    {data.item.location}
                </Text>
                <Text style={styles.tableBorder}>
                    {data.item.training_mode}
                </Text>
                <Text style={styles.tableBorder}>
                    {data.item.participants}
                </Text>
                <Text style={styles.tableBorder}>
                    {data.item.updated_at}
                </Text>
                <Text style={styles.tableBorder}>
                    {data.item.training_dt}
                </Text>
                <Text style={styles.tableBorder}>
                    {data.item.target_audience}
                </Text>
            </View>
        )
        console.warn('data',data);

    };
     render(){
        return (
            <View style={styles.mainView}>
                <View style={styles.tables}>
                    <View style={styles.tableTh}>
                        <Text style={styles.tableBorderView}>
                            {"Event"}
                        </Text>
                <Text style={styles.tableBorderView}>
                    {"Location"}
                </Text>
                <Text style={styles.tableBorderView}>
                    {"Mode"}
                </Text>
                <Text style={styles.tableBorderView}>
                    {"Participants"}
                </Text>
                <Text style={styles.tableBorderView}>
                    {"Start Date"}
                </Text>
                <Text style={styles.tableBorderView}>
                    {"End Date"}
                </Text>
                <Text style={styles.tableBorderView}>
                    {"Target Audience"}
                </Text>
                    </View>
                    <View style={styles.flatlist}>
                <FlatList
                    data={myData.data3.data}
                    horizontal={true}
                    renderItem={(data) => this.renderItem(data)}/>
                </View>
                </View>
            </View>
        );

    }

};


const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        paddingTop:10
    },
    chart: {
        width: 200,
        height: 300,
        marginTop: 50,
    },
    tableBorder:{
        padding:10,
        borderColor:'#ccc',
        borderWidth:0.6,
    },
    tableBorderView:{
        padding:10,
        borderColor:'#ccc',
        borderWidth:0.6,
        backgroundColor:'#00bfff',
        color:'white',
        fontWeight:'800'
    },
    tables:{
        flex:1,
        flexDirection:'row',
        marginRight:15,
        paddingRight:15
    },
    flatlist:{
        flex:0.6
    },
    tableTh:{
        flex:0.4
    }
});

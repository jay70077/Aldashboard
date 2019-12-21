/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Pie from 'react-native-pie'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    FlatList
} from 'react-native';
import Myheader from './Header';
import BarChart from "./BarChart";
import Table from './table'
export default class ChartData extends Component {
    render(){

        return (
            <ScrollView>
                <Myheader passNavData={this.props.navigation}/>
                <View style={styles.mainView}>
                    <Text>
                        Chart2
                    </Text>
                        <BarChart/>
                        <Table/>
                </View>
            </ScrollView>
        );

    }


};


const styles = StyleSheet.create({
    mainView:{
        justifyContent:'center',
        paddingLeft:15,
        paddingBottom:30
    },
    mainBox:{
        flex:1,
        paddingTop:30,
        paddingBottom:30,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        borderRadius:4,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        marginBottom:15,
    },
    myText:{
        fontSize: 18,
        fontWeight: '400',
        color: 'gray',
    },
    myValue:{
        fontSize: 25,
        fontWeight: '800',
        color: 'gray',
    },
    buttons:{
        flex:1,
        flexDirection:'row-reverse',
        marginBottom: 20,
        position:'relative',
        right:10,

    }

});

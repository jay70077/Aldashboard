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
import BarChart2 from "./BarChart2";
import Table from './table'
export default class ReportMytra extends Component {
    render(){

        return (
            <ScrollView>
			
                <Myheader passNavData={this.props.navigation}/>
				
                <View style={styles.mainView}>
                    <Text style={styles.textView}>
                       Report - Total Lessons
                    </Text>
					<BarChart/>
					
                    <Text style={styles.textView}>
                        Total Time Spent on Modules
                    </Text>
					<BarChart2/>
					
                    <Text style={styles.textView}>
                       Mytras
                    </Text>
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
        paddingBottom:30,
        backgroundColor:'white'
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

    },
    textView:{
        fontWeight:'800',
        color:'black'
    }

});

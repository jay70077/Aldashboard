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
import ApiIntegration from '../Utils/ApiIntegration'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    Dimensions,
    FlatList
} from 'react-native';

export default class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state={
            sampleData:[]
        }
    }
    componentDidMount (){
         ApiIntegration.trainGraph()
             .then((response)=>{
                 var resposneNew = response.data;
                 console.log('responseNew',resposneNew);
                 resposneNew.map((data)=>{
                     var obj ={};
                     console.log(data.ff_count);
                     {
                         obj.seriesName ='series1';
                         obj.color ='#00bfff';
                         var number = parseInt(data.ff_count);
                         obj.data=[{x:'ff_count',y:number}];
                         console.log('graphdata',data.ff_count);
                         //this.state.sampleData.push(obj);
                         this.setState(prevState => ({
                             sampleData: [...prevState.sampleData, obj]
                         }))
                         console.log('this.state.sampleData',this.state.sampleData);
                     }

                 })
             }).catch((error)=>{
               console.log('error',error);
         })
     }
    render(){
        // myData.data.map((data)=>{
        //     var obj ={};
        //     console.log(data.ff_count);
        //     {
        //         obj.seriesName ='series1';
        //         obj.color ='#00bfff';
        //         obj.data=[{x:'ff_count',y:data.ff_count}];
        //         this.state.sampleData.push(obj);
        // console.log('this.state.sampleData',this.state.sampleData);
        //     }
        //
        // });
        console.log('sampleDatarender',this.state.sampleData);
        return (
            <View style={styles.mainView}>
                <PureChart
                 defaultColumnWidth={Dimensions.get('window').width}
                 data={this.state.sampleData}
                 type='bar'
                 height={200}
                 color={'#00bfff'}
                />
            </View>
        );

    }

};


const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        paddingTop:10,
        paddingRight:15,
    },
    chart: {
        height: 500,
        width:400,
        marginTop: 50,
        paddingTop: 50
    },
});

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
    Button,
    FlatList
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './Header'
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
        <ScrollView>
            <Header/>
        <View style={styles.mainView}>
           <View style={styles.buttons}>
               <View style={{width:100}}>
                   <Button
                       title="Learn More"
                       color="blue"
                       accessibilityLabel="Monthly"
                   />
               </View>
              <View style={{width:100}}>
                  <Button
                      title="Learn More"
                      color="gray"
                      accessibilityLabel="Quaterly"
                  />
              </View>
              <View style={{width:100}}>
                  <Button
                      title="Learn More"
                      color="green"
                      accessibilityLabel="Yearly"
                  />
              </View>

           </View>
            <View style={styles.mainBox}>
                <Text style={styles.myText}> Total Numner of People Impact</Text>
                <Text style={styles.myValue}> {data.author}</Text>
            </View>

           <View style={styles.mainBox}>
               <Text style={styles.myText}> Digital Count</Text>
               <Text style={styles.myValue}> {data.length === 0 ? '' : data.data.digital_count}</Text>
           </View>
           <View style={styles.mainBox}>
               <Text style={styles.myText}> FF Count</Text>
               <Text style={styles.myValue}>{data.length === 0? '' : data.data.ff_count}</Text>
           </View>
           <View style={styles.mainBox}>
               <Text style={styles.myText}> F2F Count</Text>
               <Text style={styles.myValue}>{data.length === 0 ? '' : data.data.f2f_count}</Text>
           </View>

        </View>
        </ScrollView>
    );



};

export default Dashboard;
const styles = StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center'
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
        color: Colors.dark,
    },
    myValue:{
        fontSize: 25,
        fontWeight: '800',
        color: Colors.dark,
    },
    buttons:{
        flex:1,
        flexDirection:'row-reverse',
        marginBottom: 20,
       position:'relative',
        right:10,

    }

});

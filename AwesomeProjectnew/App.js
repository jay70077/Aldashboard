/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    // eslint-disable-next-line no-unused-vars
    ScrollView,
    Image,
    View,
    Text,
    StatusBar, TouchableOpacity,
} from 'react-native';

// eslint-disable-next-line no-unused-vars

import {createDrawerNavigator, DrawerItems} from "react-navigation";
import Dashboard from "./components/Dashboard";
import Chart from './components/chart'

export default class AppNew extends Component {
  render(){
      return (
          <MyDrawerNavigator/>
      );
  }
};
const contentDrawer= (props)=>(
    <View>
      <View>
          <View style={{paddingLeft:10,paddingTop:15,alignItems:'center',justifyContent: 'center'}}>
              {/* eslint-disable-next-line no-undef */}
              <TouchableOpacity >
                  <Image
                      style={{width: 40, height: 40,borderRadius: 20}}
                      source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
              </TouchableOpacity>
          </View>


      </View>
      <ScrollView >
        <DrawerItems {...props}/>
      </ScrollView>
    </View>

);

 const MyDrawerNavigator = createDrawerNavigator({
      DASHBOARD: Dashboard,
      CHART:Chart,

    },
    {
      contentComponent:contentDrawer,
      initialRouteName: 'DASHBOARD',
      drawerWidth:250,
      drawerBackgroundColor:'#00bfff',
      contentOptions: {
        activeTintColor: 'white',
        inactiveTintColor:'white',
        activeBackgroundColor:'#00bfff',
        inactiveBackgroundColor:'#00bfff',
        itemsContainerStyle: {
          marginVertical: 0,
          alignItems:'center'
        },
        iconContainerStyle: {
          opacity: 1
        }
      },


    });



// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  myView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
    hamburger:{
        width: 26,
        height: 3,
        backgroundColor: 'black',
        marginTop:3,
        marginBottom: 3,
        borderRadius:2,
    }
});



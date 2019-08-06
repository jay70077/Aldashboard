/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// eslint-disable-next-line no-unused-vars
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
    // eslint-disable-next-line no-unused-vars
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
// eslint-disable-next-line no-unused-vars

import DrawerNav from "./components/DrawerNav";
import {createDrawerNavigator, DrawerItems} from "react-navigation";
import Dashboard from "./components/Dashboard";
import Chart from "./components/chart";
// eslint-disable-next-line no-unused-vars


const App = () => {
  return (

        <View>
          <MyDrawerNavigator/>
        <Dashboard/>
        </View>

  );
};
const contentDrawer= (props)=>(
    <View>
      <View>

      </View>
      <ScrollView >
        <DrawerItems {...props}/>
      </ScrollView>
    </View>

);

export const MyDrawerNavigator = createDrawerNavigator({
      HOME: Dashboard,
      CHART: Chart,

    },
    {
      contentComponent:contentDrawer,
      initialRouteName: 'HOME',
      drawerWidth:250,
      drawerBackgroundColor:'#0d0d0d',
      contentOptions: {
        activeTintColor: 'white',
        inactiveTintColor:'white',
        activeBackgroundColor:'#0d0d0d',
        inactiveBackgroundColor:'#0d0d0d',
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
});

export default App;


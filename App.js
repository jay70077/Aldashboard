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
    StatusBar, TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
// eslint-disable-next-line no-unused-vars

import {createDrawerNavigator, DrawerItems} from "react-navigation";
import Dashboard from "./components/Dashboard";
import Chart from './components/chart'

const App = () => {
  return (
          <MyDrawerNavigator/>
  );
};
const contentDrawer= (props)=>(
    <View>
      <View>
          <View style={{paddingLeft:10,paddingTop:15,justifyContent: 'center',alignItems:'center'}}>
              {/* eslint-disable-next-line no-undef */}
              <TouchableOpacity >
                  <Text style={styles.hamburger}></Text>
                  <Text style={styles.hamburger}></Text>
                  <Text style={styles.hamburger}></Text>
              </TouchableOpacity>
          </View>
      </View>
      <ScrollView >
        <DrawerItems {...props}/>
      </ScrollView>
    </View>

);

 const MyDrawerNavigator = createDrawerNavigator({
      HOME: Dashboard,
      CHART: Chart,

    },
    {
      contentComponent:contentDrawer,
      initialRouteName: 'HOME',
      drawerWidth:250,
      drawerBackgroundColor:'gray',
      contentOptions: {
        activeTintColor: 'white',
        inactiveTintColor:'white',
        activeBackgroundColor:'gray',
        inactiveBackgroundColor:'gray',
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

export default App;


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
import Dashboard from "./components/Dashboard";
// eslint-disable-next-line no-unused-vars


const App = () => {
  return (

        <View>
          <Dashboard/>
        </View>

  );
};

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
  myView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// eslint-disable-next-line no-unused-vars
import React, {Component } from 'react';

import {
    // eslint-disable-next-line no-unused-vars
    SafeAreaView,
    StyleSheet,
    // eslint-disable-next-line no-unused-vars
    TouchableOpacity,
    // eslint-disable-next-line no-unused-vars
    View,
    // eslint-disable-next-line no-unused-vars
    Text,
    // eslint-disable-next-line no-unused-vars
    Button,
    // eslint-disable-next-line no-unused-vars
    Image
} from 'react-native';


export default class Myheader extends Component {

  render(){
      return (
          <View style={styles.mainView}>
              <View style={{paddingLeft:10,paddingTop:15}}>
                  {/* eslint-disable-next-line no-undef */}
                  <TouchableOpacity onPress={()=>this.props.passNavData.openDrawer()}>
                      <Text style={styles.hamburger}></Text>
                      <Text style={styles.hamburger}></Text>
                      <Text style={styles.hamburger}></Text>
                  </TouchableOpacity>
              </View>
          </View>

      );
  }



};

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        height:60,
        flexDirection:'row',
        backgroundColor:'#00bfff',
        marginBottom:20,
    },
    hamburger:{
        width: 26,
        height: 3,
        backgroundColor: 'white',
        marginTop:3,
        marginBottom: 3,
        borderRadius:2,
    }

});

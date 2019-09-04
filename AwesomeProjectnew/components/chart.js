/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    FlatList
} from 'react-native';
import Myheader from './Header'
export default class Chart extends Component {


    render(){
        return (
            <ScrollView>
                <Myheader passNavData={this.props.navigation}/>
                <View style={styles.mainView}>
                    <Text>
                        Chart
                    </Text>

                </View>

            </ScrollView>
        );

    }


};


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

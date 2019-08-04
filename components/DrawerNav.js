
import Dashboard from './Dashboard';
import Chart from './chart';
// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {createDrawerNavigator,DrawerItems} from 'react-navigation';
// eslint-disable-next-line no-unused-vars
import {ScrollView, StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native'
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
        HOME:'Dashboard',
        CHART:Chart,

    },{
        // eslint-disable-next-line no-undef
        initialRouteName: Dashboard,
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

class DrawerNav extends Component {
    render() {
        return (

            <MyDrawerNavigator navigation={this.props.navigation}/>

        );
    }
}

export default DrawerNav;
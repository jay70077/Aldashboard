

import React,{useState,useEffect } from 'react';
import { Icon, Picker, Form } from "native-base";
import {
    // eslint-disable-next-line no-unused-vars
    View,

} from 'react-native';
import ApiIntegration from "../Utils/ApiIntegration";


const Dropdown =(props)=>{
    const [selected, setSelected ] = useState('key1');
    const [selected1, setSelected1 ] = useState('key2');
    const [selected2, setSelected2 ] = useState('key3');


    onValueChange=(value)=> {
        ApiIntegration.filterData(value)
            .then((data)=>{
                console.log('response',data);
                setSelected1(value)
            }).catch((error)=>{
            console.log('error',error);
        });
    };


    return(
        <View>
            <View style={{flex:1,marginLeft: 20,borderBottomColor:'gray',borderBottomWidth:0.6,marginBottom:20,marginRight: 20}}>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                    style={{ width: undefined }}
                    selectedValue={selected}
                    onValueChange={this.onValueChange}
                >
                    <Picker.Item label="All RDMSs" value="key1" />
                    <Picker.Item label="Varun Ramesh" value="key2" />
                </Picker>
            </View>
            <View style={{flex:1,marginLeft: 20,borderBottomColor:'gray',borderBottomWidth:0.6,marginBottom:20,marginRight: 20}}>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                    style={{ width: undefined }}
                    selectedValue={selected1}
                    onValueChange={this.onValueChange}
                >
                    <Picker.Item label="EP" value="key0" />
                    <Picker.Item label="CHC" value="key1" />
                    <Picker.Item label="All Business Units" value="1" />
                    <Picker.Item label="Diabetes" value="key3" />
                    <Picker.Item label="Pasteur/Super specialty" value="key4" />
                </Picker>
            </View>
            <View style={{flex:1,marginLeft: 20,borderBottomColor:'gray',borderBottomWidth:0.6,marginBottom:20,marginRight: 20}}>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                    style={{ width: undefined }}
                    selectedValue={selected2}
                    onValueChange={this.onValueChange}
                >
                    <Picker.Item label="FM" value="key1" />
                    <Picker.Item label="AM" value="key2" />
                    <Picker.Item label="All Target audiences" value="key3" />
                    <Picker.Item label="RBM" value="key4" />
                </Picker>
            </View>
        </View>
    )
};
export  default Dropdown
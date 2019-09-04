// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
//
// import React, {Fragment, useState,useEffect } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     Button,
//     FlatList
// } from 'react-native';
//
// import ApiIntegration from '../Utils/ApiIntegration'
//
// import Myheader from './Header'
// import Dropdown from "./Dropdown";
// const TableData = (props) => {
//     const [data, setData] = useState([]);
//
//     useEffect(()=>{
//         ApiIntegration.dashboardApi()
//             .then((response)=>{
//                 console.log('response',response);
//                 setData(response.data)
//             }).catch((err)=>{
//             console.log('error',err);
//         });
//
//     });
//
//     return (
//         <ScrollView>
//             <View style={styles.mainView}>
//                 <View style={styles.first}>
//                     <Text style={styles.tableheader}>
//                         EVENT NAME
//                     </Text>
//
//                      <Text style={styles.tableData}>
//                          PFIT/EXPOSE
//                      </Text>
//                     <Text style={styles.tableData}>
//                         PFIT/EXPOSE
//                     </Text>
//                     <Text style={styles.tableData}>
//                         PFIT/EXPOSE
//                     </Text>
//                     <Text style={styles.tableData}>
//                         PFIT/EXPOSE
//                     </Text>
//                 </View>
//                 <View style={styles.first}>
//                     <Text style={styles.tableheader}>
//                         F2F/DIGITAL
//                     </Text>
//                     <Text style={styles.tableData}>
//                         { data.length ===0  ? '' : data.f2f_count}
//                     </Text>
//                     <Text style={styles.tableData}>
//                         test
//                     </Text>
//                     <Text style={styles.tableData}>
//                         test
//                     </Text>
//                     <Text style={styles.tableData}>
//                         test
//                     </Text>
//                 </View>
//                 <View style={styles.first}>
//                     <Text style={styles.tableheader}>
//                         FF COUNT
//                     </Text>
//                     <Text style={styles.tableData}>
//                         { data.length ===0  ? '' : data.ff_count}
//                     </Text>
//                     <Text style={styles.tableData}>
//                         test
//                     </Text>
//                     <Text style={styles.tableData}>
//                         test
//                     </Text>
//                     <Text style={styles.tableData}>
//                         test
//                     </Text>
//                 </View>
//
//
//             </View>
//
//         </ScrollView>
//     );
//
//
//
// };
//
// export default TableData;
// const styles = StyleSheet.create({
//     mainView:{
//         flex:1,
//         justifyContent:'center',
//         flexDirection:'row',
//         margin:10,
//     },
//     first:{
//       flex:0.33,
//
//     },
//     tableheader:{
//     fontSize:14,
//     fontWeight: '600',
//      borderBottomWidth:0.6,
//      backgroundColor:'gray',
//         paddingBottom:10,
//         paddingTop:10,
//         paddingLeft:10
//
//     },
//     tableData:{
//       padding:10,
//         marginBottom:1,
//       backgroundColor: 'lightgray'
//     },
//
// });

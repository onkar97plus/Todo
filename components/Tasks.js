import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const Tasks=(props)=>{

    return(
        <View style={styles.tasks}>
            <TouchableOpacity style={styles.checkMark}></TouchableOpacity>
                <Text> {props.send} </Text>
        </View>
        
    );
}

const styles=StyleSheet.create({
    tasks:{
        fontSize:10,
        backgroundColor:'#FFF',
        padding:20,
        borderRadius:8,
        margin:10,
        //flexWrap:'wrap',
        flexDirection:"row",
        // justifyContent:"space-around"
      },
      checkMark:{
        width:18,
        height:18,
        backgroundColor:'#63C1CE',
        marginRight:10,
        opacity: 0.5
      }
})

export default Tasks;
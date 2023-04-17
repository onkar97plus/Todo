import { StatusBar } from 'expo-status-bar';
import { Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './components/Tasks';
import { useState } from 'react';

export default function App() {

  const [task, addtask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const taskAdd= () =>{
    setTaskItems([...taskItems, task])
    addtask('');
  }
  
  return (

    <View style={styles.container}>

      <Text style={styles.head}>Today's tasks</Text>

      {/* These are the task items present in the different component*/}
      <ScrollView style={styles.scroll}>

        {
          taskItems.map((items, index)=> <Tasks key={index} send={items} />)
        }
        
      </ScrollView>

    
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.wrapper}>
        
        <TextInput  style={styles.input} placeholder='Enter task here' value = {task} onChangeText={text=>addtask(text)}/>

        <TouchableOpacity onPress={()=>taskAdd()}> 
          <View style={styles.addButton}>
            <Text style={{fontSize:20}}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>

      </View>
  
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#E4E6E6',
  },
  head:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:40,
    padding:20,
    flexWrap:'wrap'
  },
  wrapper:{
    position:'absolute',
    bottom:20,
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    padding:10,
    borderWidth:1,
    borderRadius:15,
    margin:5,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#FFF',
    width:250,
    borderColor:'#fff'
  },
  addButton:{
    height:45,
    width:45,
    padding:10,
    borderRadius:50,
    backgroundColor:'#FFF',
    borderWidth:1,
    alignItems:'center',
    borderColor:'#fff'
  },
  scroll:{
    marginBottom:100
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  alert,
  TouchableHighlight
} from 'react-native'

import Apps from './src/Apps'
import PopUp from './src/PopUp'

export default class App extends Component {
  state ={
    listOfHacks:[
    "Build my app #1",
    "Build my app #2",
    "Build my app #3",
    "Build my app #4",
    "Build my app #5",
    "Build my app #6",
   // "Build my app #7",
    //"Build my app #8"
  ],
  modalVisible: false,
  hack:''
  }

  add(){
    let workapps = this.state.listOfHacks
    workapps.unshift(this.state.hack)
    this.setState({listOfHacks: workapps, modalVisible: false})
  }
render() {
  return (
    <View style={styles.container}>
       <View style={styles.view1}> 
          <Text style={styles.Text1}>
            NOTEBOOK 
          </Text>
        </View>

      <View style={styles.view2}>
       <ScrollView>
        {
         this.state.listOfHacks.map((appsname, index)=>(
          <Apps key={index} name={appsname} />
            ))
        }
               
                
      </ScrollView>
        
      

        {/*modal*/}
        <PopUp modalVisible={this.state.modalVisible}>
          <KeyboardAvoidingView behaviour='padding'enabled>
            
            <TextInput placeholder='your item'
                style={styles.input}
                onChangeText={(hack)=>{this.setState({hack})}}/>

              <View style={styles.modbtn}>              
               <TouchableOpacity
                 onPress={()=>{
                  this.setState({modalVisible: false})}}>
                                  
                  <Text style={styles.btn}>
                    cancel
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>this.add()}>
                <Text style={styles.btn}>
                  add
                </Text>

                </TouchableOpacity>

              </View> 
          </KeyboardAvoidingView>
        </PopUp>       
       
         <TouchableOpacity style={styles.touch} onPress={()=>{
           this.setState({modalVisible:true})}}>
            <Text style={styles.touch1}>
             +
            </Text>
          </TouchableOpacity>        
     </View>
     
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  Text1: {
    fontSize: 20,
    textAlign: 'center',
    //margin: 10,
    color: "#0C0C0C",
    padding: 20
    
  },
  view1: {
    flex: 1,
    backgroundColor: '#51A3A3',
    //marginBottom: 400,
  },
 view2:{
   flex: 9,
},
touch:{
  position: 'absolute',
  right: 25,
  bottom: 30,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#08050C',
  width: 40,
  height: 100,
  borderRadius: 50
},
touch1:{
  fontSize: 40,
  color: '#FFF',
  padding: 5,
  paddingLeft: 5,
  paddingBottom: 7
},
btn:{
  paddingTop: 15
  
},
modbtn:{
  flexDirection: 'row',
  justifyContent: 'space-around' 
},
})

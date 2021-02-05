import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Button, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import  axios from 'axios';
 
export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      driver: []

    }
  }
 
 

  componentDidMount() {
    axios.get('http://wooback.herokuapp.com/api/user/getalldriver')
      .then(res => {
        //console.log(res.data)
        const driver = res.data;
        this.setState({
          driver
        } );
        console.log(this.state.driver)
      })
      .catch(err=>{
        console.log(err)
      })
      

  }
    
  render() {
  
    return (
      
      <View style={styles.container}>
              
        <Text style={styles.head}> First Name           Last Name          NIC          Make       Model    Number Plate      Color</Text>  
        
        {this.state.driver.map((div)=>
          <ScrollView horizontal={true}> 
          
           <Text>
            {div.firstName}         {div.lastName}          {div.nationalID}           {div.vehicle.bodyType}        {div.vehicle.model}       {div.vehicle.plateNumber}       {div.vehicle.color}  
            {"\t"} {"\t"}
       
      </Text>

      
            </ScrollView>)
           
           }
   
   
   </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: '25%',paddingLeft :40, backgroundColor: '#fff', alignContent: 'center' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 10, color: '#007AFF'},
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 0, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2, textAlign:'center'},
  
});
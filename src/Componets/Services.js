import { ScrollView, StyleSheet, Text, View,TouchableOpacity, Image,Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Services = () => {

  const services =[
     {
        id:"0",
        image:"https://cdn-icons-png.flaticon.com/512/5654/5654668.png",
        name:'Washing'
     },
     {
        id:"1",
        image:"https://cdn-icons-png.flaticon.com/512/3365/3365891.png",
        name:'Laudary'
     },
     {
        id:"2",
        image:"https://cdn-icons-png.flaticon.com/512/4072/4072096.png",
        name:'Wash & Iron'
     },
     {
        id:"3",
        image:"https://cdn-icons-png.flaticon.com/512/3300/3300371.png",
        name:'Cleaning'
     },
  ]


  return (
    <View style={{padding:10}}>

      <Text style={{fontSize:16,fontWeight:'600',marginBottom:7,color:'black',marginLeft:2}}>Services Available</Text>

      <FlatList 
        data={services}
        horizontal
        renderItem={({item,index}) => {
          return(
            <TouchableOpacity style={{margin:10,backgroundColor:"#f2f5f2",padding:10,borderRadius:10}} key={index}>
              <Image source={{uri:item.image}} style={{width:windowWidth-300,height:windowHeight/8,borderRadius:10}}></Image>
              <Text style={{fontSize:16,color:'#28282B',alignSelf:"center",marginTop:7,fontWeight:'800'}}>{item.name}</Text>
            </TouchableOpacity>
          )
        }}
      />

    </View>
  )
}

export default Services

const styles = StyleSheet.create({})
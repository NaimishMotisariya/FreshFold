import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home/Home'
import otpverifyexample from './Componets/otpverifyexample'

const Stack = createStackNavigator()

const Navigationscreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={otpverifyexample} name='Otpverify'/>
        <Stack.Screen component={Home} name='homescreen'/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({})

export default Navigationscreens
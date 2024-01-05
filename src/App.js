import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home/Home'
import otpverifyexample from './Componets/otpverifyexample'
import { Provider } from 'react-redux'
import Laundrystore from './Redux/Store'
import Order from './Home/Order'
import Cart from './Home/Cart'

const Stack = createStackNavigator()

const Navigationscreens = () => {

  if (__DEV__) {
    import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
  }

  return (
    <Provider store={Laundrystore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {/* <Stack.Screen component={otpverifyexample} name='Otpverify'/> */}
          <Stack.Screen component={Home} name='homescreen'/>
          <Stack.Screen component={Order} name='orderscreen'/>
          <Stack.Screen component={Cart} name='Cartscreen'/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})

export default Navigationscreens
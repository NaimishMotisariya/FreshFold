import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View ,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { windowheight, windowwidth } from '../Componets/Constant';
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input';
// import { ActivityIndicator } from 'react-native-paper';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const otpverifyexample = ({navigation}) => {
    const[number,setnumber] = useState('');
    const[confirm,setconfirm] = useState(null)
    const[otp,setotp] = useState('');
    const[error,seterror] =useState(false)
    const[process,setprocess]=useState(false);

    const signInWithPhoneNumber = async() =>{
        setprocess(true)
        try{const confirmation = await auth().signInWithPhoneNumber('+91'+number);
        console.log(confirmation);
        setconfirm(confirmation)
        }catch(er){
            console.log("error : " , er)
            seterror(true)
            setprocess(false)
        }
      }

      const otpverfication = async() => {
        try {
            const res = await confirm.confirm(otp);
            console.log(res);
            navigation.push('homescreen')
          } catch (error) {
            console.log('Invalid code.' , error);
          }
      }

  return (
    <View style={styles.screen}>
      <Image style={styles.img} source={{uri:"https://soji.us/wp-content/uploads/2022/12/Professional-Laundry-Services.jpg"}}/>

      <Text style={styles.heading}>
            India's #1 Laundry Service with Home Delivery
      </Text>

      <View style={styles.box}>
                <View style={styles.line}>
                </View>

                <Text style={{fontSize:20,color:'black'}}>
                    Login or Signup
                </Text>

                <View style={styles.line}>
                </View>
      </View>

     

    {
        confirm===null ? 
        (
            <View>
                <TextInput
                    style={styles.inputbox}
                    keyboardType='numeric'
                    onChangeText={(item) => {setnumber(item)}}
                    value={number}
                    placeholder='Enter Mobile number'
                    placeholderTextColor="#898383"

                />

                <TouchableOpacity
                    style={[styles.button,{flexDirection:"row"}]}
                    onPress={() => {signInWithPhoneNumber()}}
                >
                        <Text style={{fontSize:18,color:'white'}}> Login </Text>
                        {process ===true ? (<ActivityIndicator 
                        color='white'
                        size={20}
                        style={{marginLeft:5}}
                        />) : (<></>)
                    }
                </TouchableOpacity>
                {
                    error ===true ? (  <Text style={{color:'#E73131',fontSize:12,fontFamily:"Roboto-Bold",marginRight:20,marginTop:5,alignSelf:'flex-end'}}> Something went wrong,Please Try Again Letter!!! </Text>) : (<></>)
                    
                }
            </View>
        ): (
            <View>
                <OTPInputView
                    style={{width: '80%', height: 100,alignSelf:"center",marginTop:20}}
                    pinCount={6}
                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onCodeChanged = {code => { this.setState({code})}}
                    // autoFocusOnLoad
                    secureTextEntry
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code => {
                        console.log(`Code is ${code}, you are good to go!`)
                        setotp(code)
                    })}
                />

                <TouchableOpacity
                    style={[styles.button,{marginTop:10}]}
                    onPress={() => {otpverfication()}}
                >
                        <Text style={{fontSize:18,color:'white'}}> Login </Text>
                </TouchableOpacity>
            </View>
        )
    }
    </View>
  )
}

export default otpverifyexample

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"white"
    },
    img:{
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        height:(windowheight*35)/100,
        width:windowwidth
    },
    heading:{
        fontSize:28,
        width:(windowwidth*90)/100,
        alignSelf:"center",
        fontFamily:"Roboto-Bold",
        marginTop:30,
        color:'black',
        textAlign:"center"
    },
    box:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:20,
        width:windowwidth,
        alignItems:'center'
    },
    line:{
        height:2,
        borderColor:"#E6E6E6",
        width:(windowwidth*25)/100,
        backgroundColor:'black',
        marginHorizontal:20,
        
    },
    inputbox:{
        width:(windowwidth*90)/100,
        borderRadius:10,
        borderColor:'#E6E6E6',
        borderWidth:2,
        height:60,
        marginTop:20,
        alignSelf:'center',
        fontSize:20,
        paddingLeft:10,
        color:'black'
    },
    button:{
        width:(windowwidth*90)/100,
        height:50,
        borderRadius:10,
        backgroundColor:"#219ebc",
        justifyContent:'center',
        alignItems:"center",
        alignSelf:'center',
        marginTop:20
    },
    underlineStyleBase: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderRadius:5,
        borderColor:"#C8C4C4"
      },
    
      underlineStyleHighLighted: {
        borderColor: "#219ebc",
      },
})
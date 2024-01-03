import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { adddatatocart, increasecartquantity } from '../Redux/Action';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Clothes = ({ item }) => {
    const dispatch = useDispatch()
    const cartdata = useSelector((state) => state.Cart)

    const _onaddtocart = ( item) => {

        const check = cartdata.some((i) => i.data.id === item.id)
        console.log("check => " , check)
        
        if(check){
            const cart = cartdata.map((i) => i.data.id === item.id ? {...i , data:{...i.data , quantity : i.data.quantity +1 }} : item)
            console.log("cart => " , cart);
            dispatch(increasecartquantity(cart))
            console.log('update');
        }else{
            dispatch(adddatatocart(item))
            console.log('adddata');
        }
        

        console.log("cart data => ",cartdata)
      }
    

    return (
        <View>
            <TouchableOpacity style={{ backgroundColor: "#f2f5f2", borderRadius: 8, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 14 }}>
                <View>
                    <Image source={{ uri: item.image }} style={{ width: windowWidth / 5, height: windowHeight / 10 }}>
                    </Image>

                </View>

                <View>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', }}>{item.name}</Text>
                    <Text style={{ color: 'grey', fontSize: 16, fontWeight: '600',margin:3 }}>${item.price}</Text>
                </View>

                <TouchableOpacity style={{ width: 100 }} onPress={() => {_onaddtocart(item)}}>
                    <Text style={{
                        borderColor: 'grey', 
                        borderRadius:10,
                        borderWidth: 1,
                        marginVertical: 10,
                        color: '#088F8F',
                        fontWeight:'600',
                        textAlign: 'center',
                        padding: 5 }}> Add
                    </Text>
                </TouchableOpacity>

            </TouchableOpacity>
        </View>
    )
}

export default Clothes;

const styles = StyleSheet.create({})
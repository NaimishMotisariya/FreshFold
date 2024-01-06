import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Productquantitydecrement, Removecart, adddatatocart, decrementequantitiy, increasecartquantity } from '../Redux/Action';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Clothes = ({ item }) => {
    const dispatch = useDispatch()
    const cartdata = useSelector((state) => state.Cart)
    const laundrydata = useSelector((state) => state.laundrydata)

    const _onaddtocart = (item) => {
        const laundry = laundrydata.map((i) => i.data.id === item.id ? { ...i, quantity: i.data.quantity++ } : i)

        dispatch(adddatatocart(item))
        dispatch(Productquantitydecrement(laundry))
        console.log('adddata');
        console.log("laundry => ", laundry);
    }

    const _incrementquantitiy = (item) => {
        const cart = cartdata.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)

        const laundry = laundrydata.map((i) => i.data.id === item.id ? { ...i, quantity: i.data.quantity++ } : i)

        dispatch(increasecartquantity(cart))
        dispatch(Productquantitydecrement(laundry))
        console.log('increment');
    }

    const _decrementquantitiy = (item) => {
        const findcart = cartdata.find((i) => i.id === item.id);


        const laundry = laundrydata.map((i) => i.data.id === item.id ? {...i , quantity : i.data.quantity-- } : i)
        
        if(findcart.quantity == 0 ){
            const dummydata = cartdata.filter((i) => i.id !== item.id);
            dispatch(Removecart(dummydata))
        }else{
            const cart = cartdata.map((i) => i.id === item.id ? {...i , quantity : i.quantity - 1 } : i)

            dispatch(decrementequantitiy(cart))
            console.log('decrement');
        }
        dispatch(Productquantitydecrement(laundry))
    }


    console.log("laundry data => ",laundrydata)


    return (
        <View>
            <TouchableOpacity style={{ backgroundColor: "#f2f5f2", borderRadius: 8, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 14 }}>
                <View>
                    <Image source={{ uri: item.data.image }} style={{ width: windowWidth / 5, height: windowHeight / 10 }} />
                </View>

                <View>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', }}>{item.data.name}</Text>
                    <Text style={{ color: 'grey', fontSize: 16, fontWeight: '600', margin: 3 }}>${item.data.price}</Text>
                </View>

                {/* <TouchableOpacity style={{ width: 100 }} onPress={() => {_onaddtocart(item)}}>
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
                </TouchableOpacity> */}

                {

                cartdata.some((i) => i.id === item.data.id ) ? 
                    ( <View style={styles.buttonbox}>
                        <TouchableOpacity style={styles.button} onPress={() => {_incrementquantitiy(item.data)}}>
                            <Text style={{color:'#1b263b',fontSize:28,fontFamily:"Roboto-Bold"}}> + </Text>
                        </TouchableOpacity>

                        <Text style={{color:'#1b263b',fontSize:18,fontFamily:"Roboto-Bold"}}> {item.data.quantity} </Text>

                        <TouchableOpacity style={styles.button} onPress={() => {_decrementquantitiy(item.data)}}>
                            <Text style={{color:'#1b263b',fontSize:28,fontFamily:"Roboto-Bold"}}> - </Text>
                        </TouchableOpacity>
                    </View> ) : 
                    ( <TouchableOpacity style={{ width: 100 }} onPress={() => {_onaddtocart(item.data)}}>
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
                    </TouchableOpacity> )      


                }

            </TouchableOpacity>
        </View>
    )
}

export default Clothes;

const styles = StyleSheet.create({
    buttonbox: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: (windowWidth * 30) / 100,
        height: 50
    },
    button: {
        height: 40,
        width: 40,
        borderRadius: 10,
        backgroundColor: "#a2d2ff",
        justifyContent: 'center',
        alignItems: 'center'
    }
})
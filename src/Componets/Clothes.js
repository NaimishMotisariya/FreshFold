import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { adddatatocart } from '../Redux/Action';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Clothes = ({ item }) => {
    const dispatch = useDispatch()

    const _onaddtocart = ( item) => {
        dispatch(adddatatocart(item))
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
                          padding: 5
                    }}>Add</Text>
                </TouchableOpacity>

            </TouchableOpacity>
        </View>
    )
}

export default Clothes;

const styles = StyleSheet.create({})
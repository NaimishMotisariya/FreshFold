import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Clothes = ({ item }) => {
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

                <TouchableOpacity style={{ width: 100 }}>
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
import { StyleSheet, Text, View, Dimensions, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import ImageSlider from '../Componets/ImageSlider';
import Services from '../Componets/Services';
import Clothes from '../Componets/Clothes';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Home = () => {
  
    const services = [
        {
            id:'0',
            image:'https://cdn-icons-png.flaticon.com/512/3481/3481235.png',
            name:'Shirt',
            quantity:0,
            price:10,

        },
        {
            id:'1',
            image:'https://cdn.iconscout.com/icon/free/png-256/free-tshirt-1434012-1212092.png',
            name:'T-Shirt',
            quantity:0,
            price:10,

        },
        {
            id:'2',
            image:'https://cdn-icons-png.flaticon.com/512/1785/1785375.png',
            name:'dresses',
            quantity:0,
            price:10,

        },
        {
            id:'3',
            image:'https://png.pngtree.com/png-clipart/20230812/original/pngtree-trouser-male-female-clothing-vector-picture-image_10481527.png',
            name:'Jeans',
            quantity:0,
            price:10,

        },
        {
            id:'4',
            image:'https://cdn-icons-png.flaticon.com/512/1685/1685456.png',
            name:'Sweater',
            quantity:0,
            price:10,

        },
        {
            id:'5',
            image:'https://cdn-icons-png.flaticon.com/512/1461/1461313.png',
            name:'Shorts',
            quantity:0,
            price:10,

        },
        {
            id:'6',
            image:'https://cdn-icons-png.flaticon.com/512/957/957005.png',
            name:'Sleeveless',
            quantity:0,
            price:10,

        },
    ]


    return (
        <ScrollView style={styles.Screen}>
        <View >
            <View style={styles.Location}>
                <Image source={{ uri: 'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png' }} style={styles.Image} />
                <Text style={styles.Text}>Home</Text>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMlcYYdpn9HleCLqzIcI8BswbjHc6oSjz6VbL8IMa5Br-IGDklWZSaY3J5N-HFgeZSms&usqp=CAU' }} style={styles.Profile} />

            </View>

            <View style={{
                height: windowHeight / 18,
                padding: 1,
                marginLeft: 10,
                marginRight: 10,
                borderWidth: 0.8,
                borderColor: '#C0C0C0',
                marginTop: 3,
                borderRadius: 7,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',

            }}>
                <TextInput placeholder='Search for items or more' placeholderTextColor={'grey'} style={{ fontSize: 18 }}></TextInput>
                <Image source={{ uri: 'https://www.freepnglogos.com/uploads/search-png/search-icon-mono-general-iconset-custom-icon-design-12.png' }} style={{
                    width: windowWidth / 20,
                    tintColor: '#fd5c63',
                    height: windowHeight / 40,
                    margin: 7
                }} />
            </View>


            <View>
                <ImageSlider/>
            </View>

            <View>
                <Services/>
            </View>

            <View>
                {services.map((item,index)=>(
                  <Clothes item={item} key={index}/>
            
                ))}
            </View>

        </View>
        </ScrollView>
    )
}

export default Home;

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: '#fff',
        width: windowWidth,
        height: windowHeight,
    },

    Text: {
        fontSize: 20,
        color: 'black',
        margin: 7,
        fontWeight: '800',

    },
    Location: {
        flexDirection: 'row',
        alignItems:'center'
    },

    Image: {
        width: windowWidth / 22,
        margin: 7,
        height: windowHeight / 22,
        marginLeft:windowWidth/30

    },
    Profile: {
        width: windowWidth / 10,
        height: windowHeight / 20,
        borderRadius: 100,
        marginLeft: windowWidth - 160,
        margin: 7,
    },

})
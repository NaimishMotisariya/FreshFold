import { StyleSheet, Text, View, Dimensions, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageSlider from '../Componets/ImageSlider';
import Reactotron from 'reactotron-react-native';
import Services from '../Componets/Services';
import Clothes from '../Componets/Clothes';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { Alladddata, adddatatocart } from '../Redux/Action';
import { FlatList } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
  const [services, setservices] = useState();
  const [totaldata, settotaldata] = useState();
  const dispatch = useDispatch()
  const servicedata = useSelector(state => state.laundrydata);
  const carts = useSelector(state => state.Cart);

  if (__DEV__) {
    import("../ReactotronConfig").then(() => console.log("Reactotron Configured"));
  }

  useEffect(() => {
    getitem()

  }, [])

  const getitem = () => {
    firestore()
      .collection('laundrydatas')
      .get()
      .then((querySnapshot) => {
        let tempdata = [];

        querySnapshot.forEach((documentSnapshot) => {
          tempdata.push({ id: documentSnapshot.id, data: documentSnapshot.data() });
        });

        setservices(tempdata);
        dispatch(Alladddata(tempdata))
      });
  };

  const _someofitem = () => {
    let total = 0;
    carts.forEach(item => {
      total += item.price * item.quantity
    })
    settotaldata(total)
  }

  const handlePress = () => {
    navigation.push('orderscreen')
  }


 

  return (
    <View style={{ flex: 1 }}>

      <ScrollView style={styles.screen}>
        <View>
          <View style={styles.location}>
            <Image source={{ uri: 'https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png' }} style={styles.image} />
            <Text style={styles.text}>Home</Text>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMlcYYdpn9HleCLqzIcI8BswbjHc6oSjz6VbL8IMa5Br-IGDklWZSaY3J5N-HFgeZSms&usqp=CAU' }} style={styles.profile} />
          </View>

          <View style={styles.searchContainer}>
            <TextInput placeholder='Search for items or more' placeholderTextColor={'grey'} style={styles.searchInput} />
            <Image source={{ uri: 'https://www.freepnglogos.com/uploads/search-png/search-icon-mono-general-iconset-custom-icon-design-12.png' }} style={styles.searchIcon} />
          </View>

          <ImageSlider />

          <Services />
          {
            services &&
            <FlatList
              data={servicedata}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity >
                    <Clothes key={item.id} item={item} />
                  </TouchableOpacity>
                )
              }}
            />
          }
        </View>
      </ScrollView>

      {/* container */}
      <View style={styles.container}>
        <View style={{ height: 60, justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: "black" }}> Items: {carts.length}</Text>
          <Text style={{ fontSize: 18, color: "black" }}> Total: {totaldata}</Text>
        </View>
        <TouchableOpacity onPress={handlePress}>
          <Text style={{ fontSize: 24, color: "black" }}> View Buckets </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
  },
  text: {
    fontSize: 20,
    color: 'black',
    margin: 7,
    fontWeight: '800',
  },
  location: {
    flexDirection: 'row',
  },
  image: {
    width: windowWidth / 22,
    margin: 7,
    height: windowHeight / 22,
  },
  profile: {
    width: windowWidth / 10,
    height: windowHeight / 20,
    borderRadius: 100,
    marginLeft: windowWidth - 135,
    margin: 7,
  },
  searchContainer: {
    height: windowHeight / 18,
    padding: 1,
    marginHorizontal: 10,
    borderWidth: 0.8,
    borderColor: '#C0C0C0',
    marginTop: 3,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    fontSize: 18,
  },
  searchIcon: {
    width: windowWidth / 20,
    tintColor: '#fd5c63',
    height: windowHeight / 40,
    margin: 7,
  },
  container: {
    width: (windowWidth * 90) / 100,
    height: 60,
    borderRadius: 12,
    position: 'absolute',
    bottom: 30,
    backgroundColor: "#a2d2ff",
    alignSelf: 'center',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  }
});

export default Home;
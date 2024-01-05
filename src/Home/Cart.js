import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Cart = ({ route }) => {
  const {
    selectedDetergent,
    selectedFabricFresh,
    address,
    selectedDateTime,
    selectedDateTimes
  } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
      <View style={styles.shadowContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Detergent:</Text>
          <Text style={styles.value}>{selectedDetergent}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.label}>Fabric:</Text>
          <Text style={styles.value}>{selectedFabricFresh}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{address}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.label}>PICKUP:</Text>
          <Text style={styles.value}>{selectedDateTime.toString()}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.label}>DELIVERY:</Text>
          <Text style={styles.value}>{selectedDateTimes.toString()}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#088F8F',
  },
  shadowContainer: {
    backgroundColor: '#f2f5f2',
    height: height * 0.4,
    borderRadius: 10,
    justifyContent:"center",
    shadowColor: '#088F8F',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#088F8F',
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Cart;

import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Detergent = () => {
  const [selectedDetergent, setSelectedDetergent] = useState('None');

  const handleDetergentPress = (detergent) => {
    setSelectedDetergent(detergent);
  };

  const detergentButtons = [
    { id: 0, name: 'None' },
    { id: 1, name: 'Sulf-Exel' },
    { id: 2, name: 'Ghadi' },
    { id: 3, name: 'Tide' },
    { id: 4, name: 'Wheel' },
    { id: 5, name: 'Rin' },
    { id: 6, name: 'Vanish' },
  ];

  // console.log('Detergent',selectedDetergent)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Order US</Text>
      </View>

      <Text style={styles.detergent}>Detergent</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.row, { marginBottom: 0 }]}>
          {detergentButtons.map((button) => (
            <TouchableOpacity
              key={button.id}
              style={[
                styles.button,
                { backgroundColor: selectedDetergent === button.name ? '#088F8F' : '#f2f5f2' },
              ]}
              onPress={() => handleDetergentPress(button.name)}
            >
              <Text style={styles.buttonText}>{button.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Detergent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: height * 0.1,
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 10,
    color: 'black',
    fontWeight: '600',
  },
  headerText: {
    fontSize: 24,
    color: '#088F8F',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0, 
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    width: 90,
    height: 40,
    borderWidth: 1,
    borderColor: '#f2f5f2',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  detergent: {
    fontSize: 20,
    color: '#088F8F',
    marginLeft: 10,
    marginBottom: 0,
  },
});

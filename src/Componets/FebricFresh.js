import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Dimensions} from 'react-native';
import React,{useState} from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Febric = () => {
  const [selectedDetergent, setSelectedDetergent] = useState('None');

  const handleDetergentPress = (detergent) => {
    setSelectedDetergent(detergent);
  };

  const detergentButtons = [
    { id: 0, name: 'None' },
    { id: 1, name: 'Comfort' },
    { id: 2, name: 'Vanish' },
    { id: 3, name: 'Genteel' },
    { id: 4, name: 'Ariel' },
    { id: 5, name: 'Hyde-xl ' },
    { id: 6, name: 'Safewash' },
   
  ];

  // console.log('FebricFresh',selectedDetergent)

  return (
    <View style={styles.container}>
      <Text style={styles.detergent}>Febric Freshner </Text>

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

export default Febric;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:height*0.1,
    padding: 10,
    // marginBottom:50,
   },
  header: {
    alignItems: 'center',
    marginBottom:0,
    color: 'black',
    fontWeight: '600',
  },
  headerText: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    height:height*0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
    // marginBottom:20,
    borderRadius: 10,
    marginRight: 10,
    width:90,
    height:40,
    borderWidth: 1,
    borderColor: '#f2f5f2', 
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18, 
  },
  detergent: {
    fontSize: 20,
    color: '#088F8F',
    marginLeft: 10,
    marginBottom:5,
  },
});




import React, { useState } from 'react';
import { Button, Text, View, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DatePicker from 'react-native-date-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Delivery = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  return (
    <View style={styles.container}>
        
      <Text style={styles.text}>Delivery</Text>
     
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Select Date and Time</Text>
        <TouchableOpacity onPress={() => setOpen(true)} style={styles.button}>
          <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/010/851/447/original/calendar-flat-icon-png.png'}} style={{width:30,height:30}}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.dateTimeContainer}>
        {selectedDateTime && (
          <Text style={styles.dateTimeText}>
            CONFIRM: {selectedDateTime.toString()}
          </Text>
        )}
      </View>

      <DatePicker
        modal
        open={open}
        title={'SELECT PICKUP'}
        date={date}
        androidVariant='iosClone'
        theme='dark'
        is24hourSource={'device'}
        mode='datetime'
        textColor='#088F8F'
        dividerHeight={10}
        fadeToColor={'#000'}
        confirmText={'Select'}
        timeZoneOffsetInMinutes={2}
        onConfirm={(selectedDate) => {
          setOpen(false);
          setDate(selectedDate);
          setSelectedDateTime(selectedDate);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    height: height/1,
    padding: 10,
  },
  textContainer: {
    backgroundColor: '#088F8F',
    borderRadius:10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    marginLeft:20,
    color:"#088F8F",
    fontWeight: '500',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf:"center",
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  headerText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#088F8F',
    borderRadius: 5,
    padding: 5,
    marginLeft:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  dateTimeContainer: {
    backgroundColor: '#088F8F',
    width: width - 60,
    height: 40,
    borderRadius: 10,
    alignSelf:"center",
    padding: 10,
    margin:10,
    // marginBottom: 190,
  },
  dateTimeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});

export default Delivery;

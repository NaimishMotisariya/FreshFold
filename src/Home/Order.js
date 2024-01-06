import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Order = ({ navigation }) => {
  
  const [selectedDetergent, setSelectedDetergent] = useState('None');
  const [selectedFabricFresh, setSelectedFabricFresh] = useState('None');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [address, setAddress] = useState('');
  const [dates, setDates] = useState(new Date());
  const [opens, setOpens] = useState(false);
  const [selectedDateTimes, setSelectedDateTimes] = useState(null);

  const handleDetergentPress = (detergent) => {
    setSelectedDetergent(detergent);
  };

  const handleFabricFreshPress = (fabricFresh) => {
    setSelectedFabricFresh(fabricFresh);
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
  const detergentButtons2 = [
    { id: 0, name: 'None' },
    { id: 1, name: 'Comfort' },
    { id: 2, name: 'Vanish' },
    { id: 3, name: 'Genteel' },
    { id: 4, name: 'Ariel' },
    { id: 5, name: 'Hyde-xl ' },
    { id: 6, name: 'Safewash' },

  ];
  const handleOrderPress = () => {
    navigation.replace('Cartscreen', {
      selectedDetergent,
      selectedFabricFresh,
      address,
      selectedDateTime,
      selectedDateTimes
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.keyboardAvoidingContainer}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.componentContainer}>
          <Text style={styles.detergent}>Detergent</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              {detergentButtons.map((button) => (
                <TouchableOpacity
                  key={button.id}
                  style={[
                    styles.button,
                    { backgroundColor: selectedDetergent === button.name ? '#a2d2ff' : '#f2f5f2' },
                  ]}
                  onPress={() => handleDetergentPress(button.name)}
                >
                  <Text style={styles.buttonText}>{button.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.componentContainer}>
          <Text style={styles.detergent}>Fabric Freshner</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.row}>
              {detergentButtons2.map((button) => (
                <TouchableOpacity
                  key={button.id}
                  style={[
                    styles.button,
                    { backgroundColor: selectedFabricFresh === button.name ? '#a2d2ff' : '#f2f5f2' },
                  ]}
                  onPress={() => handleFabricFreshPress(button.name)}
                >
                  <Text style={styles.buttonText}>{button.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={styles.componentContainer}>
          <Text style={styles.text}>Address</Text>
          <TextInput
            style={styles.addressInput}
            multiline={true}
            placeholderTextColor={'#a2d2ff'}
            numberOfLines={4}
            value={address}
            onChangeText={(text) => setAddress(text)}
            placeholder="Enter your address here"
          />
        </View>

        <View style={styles.componentContainer2}>
          <Text style={styles.text}>PICKUP</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Text style={styles.text}>Select Date and Time</Text>
            <TouchableOpacity onPress={() => setOpen(true)} style={styles.button}>
              <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/851/447/original/calendar-flat-icon-png.png' }} style={{ width: 30, height: 30 }}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.dateTimeContainer}>
            {selectedDateTime !== null && (
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
            textColor='#a2d2ff'
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

        <View style={styles.componentContainer2}>
          <Text style={styles.text}>Delivery</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>

            <Text style={styles.text}>Select Date and Time</Text>
            <TouchableOpacity onPress={() => setOpens(true)} style={styles.button}>
              <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/010/851/447/original/calendar-flat-icon-png.png' }} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.dateTimeContainer}>
            {selectedDateTimes !== null && (
              <Text style={styles.dateTimeText}>
                CONFIRM: {selectedDateTimes.toString()}
              </Text>
            )}
          </View>
          <DatePicker
            modal
            open={opens}
            title={'SELECT DELIVERY'}
            date={dates}
            androidVariant='iosClone'
            theme='dark'
            is24hourSource={'device'}
            mode='datetime'
            textColor='#a2d2ff'
            dividerHeight={10}
            fadeToColor={'#000'}
            confirmText={'Select'}
            timeZoneOffsetInMinutes={2}
            onConfirm={(selectedDate) => {
              setOpens(false);
              setDates(selectedDate);
              setSelectedDateTimes(selectedDate);
            }}
            onCancel={() => {
              setOpens(false);
            }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.orderButton} onPress={handleOrderPress}>
            <Text style={styles.orderButtonText}>Place the order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  componentContainer2: {
    flex: 1,
    margin: 10,
    justifyContent:'center',
    height:height*0.1,
    width: width - 20,
    alignSelf:'center',
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#f2f5f2',
    shadowColor: '#a2d2ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  componentContainer: {
    flex: 1,
    margin: 10,
    width: width - 20,
    alignSelf:'center',
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#f2f5f2',
    shadowColor: '#a2d2ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
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
    color: '#a2d2ff',
    marginLeft: 10,
    marginBottom: 0,
  },
  addressInput: {
    height: height * 0.1,
    backgroundColor: 'white',
    width: width - 40,
    color:'#a2d2ff',
    fontSize: 18,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 8,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#a2d2ff',
    fontWeight: '500',
    marginLeft: 20,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 20,
    alignItems: 'center',
  },
  orderButton: {
    backgroundColor: '#a2d2ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateTimeContainer: {
    backgroundColor: '#a2d2ff',
    width: width - 60,
    height: 40,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  dateTimeText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});

export default Order;

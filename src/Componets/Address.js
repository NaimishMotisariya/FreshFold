import React from 'react';
import { StyleSheet, TextInput, View, Text, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Address = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingContainer}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Address</Text>
        <TextInput
          style={styles.addressInput}
          multiline={true}
          placeholderTextColor={'#088F8F'}
          numberOfLines={4}
          placeholder="Enter your address here"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingContainer: {
    flex: 1,
    height:height,
  },
  container: {
    padding: 10,
  },
  addressInput: {
    height: height * 0.1,
    backgroundColor: 'white',
    width: width - 40,
    fontSize: 18,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 8,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#088F8F',
    fontWeight: '500',
    marginLeft: 20,
  },
});

export default Address;

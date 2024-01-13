
import React, {useState} from 'react';
import { ValidateEmail, validateEmail } from '../utils';
import { View, Image, Text, Pressable, StyleSheet, Alert, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

const SubscribeScreen = () => {

  const [email, onChangeEmail] = useState('')

  const handleSubscribe = () => {
    if(validateEmail(email)) {
      Alert.alert("Thanks for subscribing, stay tuned!")
    } else {
      Alert.alert("Invalid email. Please enter a valid email")
    }
  }

  const isEmailValid = validateEmail(email)
  
  return (
  <KeyboardAvoidingView style={styles.container}
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={styles.container }>
  <Image style={styles.logoImage} source={require('../assets/little-lemon-logo-grey.png')}
    resizeMode='contain'/>

  <Text style={styles.mainText}>Subscribe to our newsletter for our latest delicious recipes!</Text>

  <TextInput
  style={styles.input}
  value={email}
  onChangeText={onChangeEmail}
  keyboardType="email-address"
  placeholder={'Type your email'} />

  <Pressable onPress={handleSubscribe}
    style={[styles.button, !isEmailValid && styles.disabledButton]}>
  <Text style={styles.buttonText}>Subscribe</Text>
  </Pressable>
  </View>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create ({

  container: {

      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
    },

  logoImage: {
    width: 120,
    height: 120,
    
  },

  mainText: {
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
    
    
  },
  button: {
    height: 40,
    width: 350,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 100,
    backgroundColor: '#3E524C',
    borderColor: '#3E524C',
    borderWidth: 2,
    borderRadius: 10,
    
  },
  disabledButton: {
    height: 40,
    width: 350,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 100,
    backgroundColor: '#A9A9A9',
    borderColor: '#A9A9A9',
    borderWidth: 2,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center'
  },

  input: {
    height: 50,
    width: 350,
    borderWidth: 2,
    padding: 10,
    fontSize: 16,
    borderColor: '#3E524C',
    borderRadius: 10,
    marginBottom: 20,
    color: 'black'

  }

});


export default SubscribeScreen;

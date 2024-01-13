import * as React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View style={styles.container}>
    <Image style={styles.logoImage} source={require('../assets/little-lemon-logo.png')}
    resizeMode='contain'/>
    <Text style={styles.mainText}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable onPress={() => navigation.navigate("Subscribe")}
    style={styles.button}>
      <Text style={styles.buttonText}>Newsletter</Text>
    </Pressable>
  </View>;
};

const styles = StyleSheet.create ({

  container: {

      flex: 1,
      paddingTop: 150,
      alignItems: 'center',
    },

  logoImage: {
    width: 200,
    height: 200,
    
  },

  mainText: {
    padding: 60,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 80,
    
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
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }

});

export default WelcomeScreen;

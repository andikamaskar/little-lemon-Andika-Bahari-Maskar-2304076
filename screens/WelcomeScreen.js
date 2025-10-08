import * as React from 'react';
import { View, Button, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from '../styles/style';
import { useFonts } from 'expo-font';

const WelcomeScreen = ({ navigation }) => {
  return(
    <View style={styles.containerWelcome}>
      <Image source={require('../assets/little-lemon-logo.png')} style={styles.ImageWelcome} resizeMode='contain'/>
      <Text style={styles.tittleWelcome}>
        Little Lemon, your local
      </Text>
      <Text style={styles.tittleWelcome}>
        Mediterranean Bistro
      </Text>
      <View style={localStyles.footer}>
        <TouchableOpacity
          style={localStyles.button}
          onPress={() => navigation.navigate("Subscribe")}
        >
          <Text style={localStyles.buttonText}>Newsletter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const localStyles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    paddingBottom: 30,
  },
  button: {
    backgroundColor: '#07cc17ff',
    borderRadius: 8,
    paddingVertical: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
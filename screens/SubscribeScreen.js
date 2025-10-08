import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert, Modal } from 'react-native';
import { styles } from '../styles/style'

const SubscribeScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const isValidEmail = email.includes('@') && email.includes('.');
  const handleSubscribe = () => {
    setModalVisible(true);
    setEmail('');
  };

  return (
    <View style={styles.containerSubscribe}>
      <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.ImageSubscribe} resizeMode='contain' />
      <Text style={styles.titleSubscribe}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <View style={localStyles.inputBorder}>
        <TextInput
        style={localStyles.input}
        placeholder="Type your email"
        placeholderTextColor="rgba(0,0,0,0.5)"
        value={email}
        onChangeText={setEmail}
      />
      </View>
      <TouchableOpacity
        style={[
          localStyles.button,
          { backgroundColor: isValidEmail ? '#4CAF50' : '#ccc' },
        ]}
        disabled={!isValidEmail}
        onPress={handleSubscribe}
      >
        <Text style={localStyles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={localStyles.modalOverlay}>
          <View style={localStyles.modalContainer}>
            <Text style={localStyles.modalTitle}>Thanks for subscribing,</Text>
            <Text style={localStyles.modalSubtitle}>stay tuned!</Text>

            <TouchableOpacity
              style={localStyles.okButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={localStyles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SubscribeScreen;

const localStyles = StyleSheet.create({
  button: {
    backgroundColor: '#07cc17ff',
    borderRadius: 8,
    paddingVertical: 10,
    width: '95%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 3,
    paddingVertical: 10,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    fontSize: 18,
  },
  inputBorder: {
    paddingBottom: 20,
    width: '95%',
  },
   modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: 280,
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  modalSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  okButton: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  okButtonText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 18,
  },
});
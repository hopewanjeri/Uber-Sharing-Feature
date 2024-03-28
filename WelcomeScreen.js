import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleNextPress = () => {
    // Navigate to the next screen (e.g., login screen)
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/uber_logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>Welcome to Uber</Text>
      <Text style={styles.tagline}>Move with safety and ease</Text>
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;

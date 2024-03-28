import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const WhereToScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const [pickUpLocation, setPickUpLocation] = useState('');
  const [destination, setDestination] = useState('');

  const handleOrderRide = () => {
    // Handle ordering the ride logic here
    console.log('Ordering ride...');
    // Navigate to PricingScreen after ordering the ride
    navigation.navigate('PricingScreen');
  };

  // Mapping suggestions
  const mappingSuggestions = [
    'KCA University',
    'Allsops',
    'Kasarani',
    'Archives',
    'Juja',
    'Ruiru',
  ];

  const renderSuggestions = () => {
    return mappingSuggestions.map((location, index) => (
      <TouchableOpacity
        key={index}
        style={styles.suggestionItem}
        onPress={() => setDestination(location)}
      >
        <Text style={styles.suggestionText}>{location}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ImageBackground source={require("./assets/background.jpg")} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Where To?</Text>
        <TextInput
          style={styles.input}
          placeholder="Pick Up"
          value={pickUpLocation}
          onChangeText={setPickUpLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Where To"
          value={destination}
          onChangeText={setDestination}
        />
        {/* Mapping suggestions list */}
        <View style={styles.suggestionsContainer}>
          {renderSuggestions()}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleOrderRide}>
          <Text style={styles.buttonText}>Order Ride</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007AFF', // Uber-like primary color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    color: 'white',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#007AFF', // Uber-like primary color
    fontSize: 20,
    fontWeight: 'bold',
  },
  suggestionsContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    marginBottom: 20,
  },
  suggestionItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  suggestionText: {
    color: 'white',
    fontSize: 18,
  },
});



export default WhereToScreen;

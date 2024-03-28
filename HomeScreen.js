import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const HomeScreen = ({ navigation }) => {
  const [carMarkers, setCarMarkers] = useState([]);

  // Generate random coordinates within a certain region
  const generateRandomCoordinate = (center, radius) => {
    const x0 = center.latitude;
    const y0 = center.longitude;
    const rd = radius / 111300; // About 111300 meters in one degree

    const u = Math.random();
    const v = Math.random();
    const w = rd * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y = w * Math.sin(t);

    const newX = x / Math.cos(y0);

    const newLatitude = newX + x0;
    const newLongitude = y + y0;

    return { latitude: newLatitude, longitude: newLongitude };
  };

  // Generate random car markers
  useEffect(() => {
    const regionCenter = {
      latitude: -1.2529,
      longitude: 36.8840,
    };

    const numCars = 30; // Number of cars to display
    const carMarkersArray = [];

    for (let i = 0; i < numCars; i++) {
      const randomCoordinate = generateRandomCoordinate(regionCenter, 5000); // Radius of 5000 meters
      carMarkersArray.push(randomCoordinate);
    }

    setCarMarkers(carMarkersArray);
  }, []);

  const handleWhereToPress = () => {
    // Navigate to the "Where To" screen when the button is pressed
    navigation.navigate('WhereToScreen');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -1.2529,
          longitude: 36.8840,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {carMarkers.map((coordinate, index) => (
          <Marker
            key={index}
            coordinate={coordinate}
            title={`Car ${index + 1}`}
          >
            <Icon name="car" size={30} color="blue" />
          </Marker>
        ))}
      </MapView>
      
      <TouchableOpacity style={styles.whereToButton} onPress={handleWhereToPress}>
        <Text style={styles.buttonText}>Where To?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  whereToButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

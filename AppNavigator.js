// AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';




const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      
      
      
    </Stack.Navigator>
  );
};

export default AppNavigator;

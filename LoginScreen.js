import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    
    navigation.navigate('Home');
  };

  return (
    <ImageBackground source={require('./assets/background_image.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome back!</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#A0A0A0"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#A0A0A0"
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    width: '80%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#A0A0A0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: '#A0A0A0',
    marginTop: 10,
  },
});

export default LoginScreen;

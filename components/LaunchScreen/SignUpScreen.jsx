import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc';
import { FIREBASE_AUTH } from '../../data/fireBaseConfig.js';
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match. Please try again.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);
      Alert.alert("Account created! Please check your email for verification.");
      navigation.navigate('LoginScreen');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <LinearGradient
      colors={['#2c3e50', '#4c5c6a', '#6a5675']} // Purple gradient background
      start={[0, 0]}
      end={[1, 1]}
      style={tw`flex-1 justify-center p-6`}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`absolute top-10 left-5`}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Header */}
      <View style={tw`items-center mb-10`}>
      <Ionicons name="logo-octocat" size={50} color="#b083ff" style={tw`mb-4`} />
        <Text style={tw`text-white text-4xl font-bold mb-1 text-center`}>Sign Up</Text>
        <Text style={tw`text-gray-300 text-sm text-center`}>Create your account</Text>
      </View>

      {/* Email Input */}
      <View style={tw`bg-gray-800 rounded-md flex-row items-center px-4 mb-4`}>
        <Ionicons name="mail-outline" size={20} color="gray" style={tw`mr-2`} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          style={tw`text-white flex-1 py-3`}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={tw`bg-gray-800 rounded-md flex-row items-center px-4 mb-4`}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={tw`mr-2`} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          style={tw`text-white flex-1 py-3`}
          secureTextEntry
        />
      </View>

      {/* Confirm Password Input */}
      <View style={tw`bg-gray-800 rounded-md flex-row items-center px-4 mb-8`}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={tw`mr-2`} />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={tw`text-white flex-1 py-3`}
          secureTextEntry
        />
      </View>

       {/* Sign Up Button with Blue Gradient */}
      <TouchableOpacity onPress={handleSignUp} style={tw`rounded-full overflow-hidden mb-6`}>
        <LinearGradient
          colors={['#4a90e2', '#007aff']} // Light blue to darker blue gradient
          start={[0, 0]}
          end={[1, 1]}
          style={tw`py-3`}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>Create Account</Text>
        </LinearGradient>
      </TouchableOpacity>


      {/* Login Link */}
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={tw`mt-4`}>
        <Text style={tw`text-gray-300 text-center`}>
          Already have an account?{' '}
          <Text style={tw`text-pink-400`}>Login</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

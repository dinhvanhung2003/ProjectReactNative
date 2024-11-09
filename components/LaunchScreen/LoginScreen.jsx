import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import tw from 'twrnc';
import { FIREBASE_AUTH } from '../../data/fireBaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('HomeScreen');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={tw`flex-1 bg-black justify-center p-6`}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`absolute top-10 left-5`}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Logo */}
      <View style={tw`items-center mb-10`}>
        <Ionicons name="logo-octocat" size={50} color="#b083ff" style={tw`mb-4`} />
        <Text style={tw`text-white text-4xl font-bold mb-1`}>Welcome Back!</Text>
        <Text style={tw`text-gray-400 text-sm`}>Hello, we miss you...</Text>
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
      <View style={tw`bg-gray-800 rounded-md flex-row items-center px-4 mb-6`}>
        <Ionicons name="lock-closed-outline" size={20} color="gray" style={tw`mr-2`} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          style={tw`text-white flex-1 py-3`}
          secureTextEntry
        />
        <Ionicons name="eye-off-outline" size={20} color="gray" />
      </View>

      {/* Login Button with Gradient */}
      <TouchableOpacity onPress={handleLogin} style={tw`rounded-full overflow-hidden mb-6`}>
        <LinearGradient
          colors={['#4e54c8', '#8f94fb']} // Purple-to-blue gradient for the button
          start={[0, 0]}
          end={[1, 1]}
          style={tw`py-3`}
        >
          <Text style={tw`text-white text-center text-lg font-semibold`}>LOGIN</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Separator */}
      <Text style={tw`text-gray-400 text-center mb-4`}>or</Text>

      {/* Social Login Buttons */}
      <View style={tw`flex-row justify-center mb-4`}>
        <TouchableOpacity style={tw`bg-gray-700 flex-row items-center py-2 px-6 mr-4 rounded-md`}>
          <FontAwesome name="google" size={20} color="white" style={tw`mr-2`} />
          <Text style={tw`text-white`}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-gray-700 flex-row items-center py-2 px-6 rounded-md`}>
          <FontAwesome name="facebook" size={20} color="white" style={tw`mr-2`} />
          <Text style={tw`text-white`}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={tw`mt-4`}>
        <Text style={tw`text-gray-400 text-center`}>
          Don't have an account?{' '}
          <Text style={tw`text-pink-500`}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

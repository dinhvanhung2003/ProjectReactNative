import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';
export default function LaunchScreen({ navigation }) {
  return (
    <View style={tw`flex-1`}>
      <ImageBackground
        source={require('../../assets/LaunhScreen/LaunchScreen.png')}
        style={tw`w-full h-full justify-center items-center`}
      >
        <Image
          source={require('../../assets/LaunhScreen/IconLaunchScreen.png')}
          style={tw`w-24 h-24 flex-7`}
          resizeMode="contain"
        />
        
        <Text style={tw`text-white text-4xl font-bold text-center mb-10 flex-4`}>
          Your music{'\n'}Your{'\n'}artists
        </Text>
        
        <View style={tw`flex-3`}>
          <TouchableOpacity style={tw`bg-black py-3 px-16 rounded-full mb-4`}>
            <Text style={tw`text-white text-base`}>Create an account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-white py-3 px-10 rounded-full`}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text style={tw`text-teal-400 text-base`}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

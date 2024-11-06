import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const NavigationBar = ({ activeTab, onTabPress }) => {
  return (
    <View style={tw`flex-row justify-around bg-white py-3 border-t border-gray-200`}>
      <TouchableOpacity style={tw`items-center`} onPress={() => onTabPress('Home')}>
        <Ionicons name="home-outline" size={24} color={activeTab === 'Home' ? '#00BFFF' : '#666'} />
        <Text style={[tw`text-xs`, activeTab === 'Home' && tw`text-blue-500`]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tw`items-center`} onPress={() => onTabPress('Search')}>
        <Ionicons name="search-outline" size={24} color={activeTab === 'Search' ? '#00BFFF' : '#666'} />
        <Text style={[tw`text-xs`, activeTab === 'Search' && tw`text-blue-500`]}>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tw`items-center`} onPress={() => onTabPress('Feed')}>
        <Ionicons name="apps-outline" size={24} color={activeTab === 'Feed' ? '#00BFFF' : '#666'} />
        <Text style={[tw`text-xs`, activeTab === 'Feed' && tw`text-blue-500`]}>Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tw`items-center`} onPress={() => onTabPress('Library')}>
        <Ionicons name="library-outline" size={24} color={activeTab === 'Library' ? '#00BFFF' : '#666'} />
        <Text style={[tw`text-xs`, activeTab === 'Library' && tw`text-blue-500`]}>Library</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;

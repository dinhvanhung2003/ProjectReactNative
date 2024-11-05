import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const ChartDetails = ({ route, navigation }) => {
  const { chart } = route.params;

  const handleSongPress = (song, index) => {
    navigation.navigate('MusicPlayer', { songs: chart.songs, initialIndex: index });
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row items-center p-4 mb-4`}>
        <Image source={{ uri: chart.imageUrl }} style={tw`w-20 h-20 rounded-lg mr-4`} />
        <View style={tw`flex-1`}>
          <Text style={tw`text-xl font-bold`}>{chart.label} - {chart.country}</Text>
          <View style={tw`flex-row items-center my-1`}>
            <Ionicons name="heart-outline" size={16} color="#888" />
            <Text style={tw`text-xs text-gray-500 mx-1`}>1,234</Text>
            <Ionicons name="time-outline" size={16} color="#888" />
            <Text style={tw`text-xs text-gray-500 ml-1`}>05:10:18</Text>
          </View>
          <Text style={tw`text-sm text-gray-500`}>Daily chart-toppers update</Text>
        </View>
        <TouchableOpacity style={tw`bg-black w-12 h-12 rounded-full items-center justify-center`}>
          <Ionicons name="play" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Song List */}
      <FlatList
        data={chart.songs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleSongPress(item, index)} style={tw`flex-row items-center py-3 px-4 border-b border-gray-200`}>
            <Image source={{ uri: item.imageUrl }} style={tw`w-12 h-12 rounded mr-4`} />
            <View style={tw`flex-1`}>
              <Text style={tw`text-base font-semibold`}>{item.title}</Text>
              <Text style={tw`text-sm text-gray-500 my-1`}>{item.artist}</Text>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-xs text-gray-500 mr-2`}>{item.plays}</Text>
                <Ionicons name="play-outline" size={14} color="#888" style={tw`mx-1`} />
                <Text style={tw`text-xs text-gray-500 ml-2`}>{item.duration}</Text>
              </View>
            </View>
            <Ionicons name="ellipsis-vertical" size={20} color="#888" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ChartDetails;

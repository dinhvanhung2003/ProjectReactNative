import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import MiniPlayer from '../HomeScreen/MiniPlayer';
import NavigationBar from '../HomeScreen/NavigationBar';

const AlbumDetails = ({ route, navigation }) => {
  const { album } = route.params;
  const [activeTab, setActiveTab] = useState('');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'Home':
        navigation.navigate('HomeScreen');
        break;
      case 'Search':
        navigation.navigate('SearchScreen');
        break;
      default:
        break;
    }
  };

  const handleSongPress = (song, index) => {
    navigation.navigate('MusicPlayer', { songs: album.songs, initialIndex: index });
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white top-2`}>
      {/* Header */}
      <View style={tw`flex-row items-center p-4 mb-2 mt-4`}>
        <ImageBackground
          source={{ uri: album.imageUrl }}
          style={tw`w-24 h-24 rounded-lg mr-4 justify-center items-center`}
          imageStyle={tw`rounded-lg`}
        >
        </ImageBackground>

        <View style={tw`flex-1`}>
          <Text style={tw`text-xl font-bold`}>{album.title} - {album.artist}</Text>
          <View style={tw`flex-row items-center my-1`}>
            <Ionicons name="heart-outline" size={16} color="#888" />
            <Text style={tw`text-xs text-gray-500 mx-1`}>1,234</Text>
            <Ionicons name="time-outline" size={16} color="#888" />
            <Text style={tw`text-xs text-gray-500 ml-1`}>05:10:18</Text>
          </View>
          <Text style={tw`text-sm text-gray-500`}>Enjoy the best songs from this album</Text>
        </View>

        <TouchableOpacity style={tw`bg-black w-12 h-12 rounded-full items-center justify-center`}>
          <Ionicons name="play" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={tw`flex-row justify-around my-2`}>
        <TouchableOpacity>
          <Ionicons name="heart" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share-social" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="download" size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Song List */}
      <FlatList
        data={album.songs}
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

      {/* MiniPlayer and Navigation Bar */}
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <MiniPlayer />
        <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
      </View>
    </SafeAreaView>
  );
};

export default AlbumDetails;

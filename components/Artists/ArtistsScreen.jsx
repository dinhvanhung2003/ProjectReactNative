import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const ArtistProfileScreen = ({ route, navigation }) => {
  const { artist } = route.params || {};

  if (!artist) {
    return <Text style={tw`text-center mt-20`}>Artist data is unavailable</Text>;
  }

  const handleSongPress = (songs) => {
    navigation.navigate('MusicPlayer', { songs });
  };

  return (
    <ScrollView contentContainerStyle={tw`p-6`}>
      {/* Profile Header with Back Button */}
      <View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={tw`absolute left-4 top-4`}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={tw`items-center mb-6`}>
        <Image source={{ uri: artist.imageUrl }} style={tw`w-36 h-36 rounded-full mb-4`} />
        {/* Back Button Overlay */}
       
      </View>

      {/* Artist Name and Follower Count */}
      <View style={tw`items-center mb-4`}>
        <Text style={tw`text-2xl font-bold`}>{artist.name}</Text>
        <Text style={tw`text-gray-500`}>{artist.followers} Followers</Text>
      </View>

      {/* Action Buttons */}
      <View style={tw`flex-row justify-center items-center mb-6`}>
        <TouchableOpacity style={tw`border border-gray-300 rounded-full px-4 py-1 mr-2`}>
          <Text style={tw`text-base font-semibold`}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`p-2 mr-2`}>
          <MaterialIcons name="more-horiz" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-black p-3 rounded-full`}>
          <Ionicons name="play" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Popular Songs Section */}
      <Text style={tw`text-lg font-semibold mb-4`}>Popular</Text>
      {artist.songs && artist.songs.length > 0 ? (
        artist.songs.map((song, index) => (
          <TouchableOpacity key={song.id} onPress={() => handleSongPress(song)}>
            <View style={tw`flex-row items-center mb-4`}>
              <Image source={{ uri: song.imageUrl }} style={tw`w-12 h-12 rounded mr-3`} />
              <View style={tw`flex-1`}>
                <Text style={tw`text-base font-semibold`}>{song.title}</Text>
                <Text style={tw`text-sm text-gray-500`}>{song.artist} · {song.duration}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text style={tw`text-gray-500`}>No popular songs available</Text>
      )}

      {/* Albums Section */}
      <Text style={tw`text-lg font-semibold mt-6 mb-4`}>Albums</Text>
      {artist.albums && artist.albums.length > 0 ? (
        artist.albums.map((album) => (
          <View key={album.id} style={tw`mr-4 w-32`}>
            <Image source={{ uri: album.imageUrl }} style={tw`w-28 h-28 rounded-lg`} />
            <Text style={tw`text-sm font-semibold mt-2 text-center`}>{album.title}</Text>
          </View>
        ))
      ) : (
        <Text style={tw`text-gray-500`}>No albums available</Text>
      )}
    </ScrollView>
  );
};

export default ArtistProfileScreen;

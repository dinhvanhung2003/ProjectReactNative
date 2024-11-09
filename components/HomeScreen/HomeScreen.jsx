import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MiniPlayer from './MiniPlayer';
import NavigationBar from './NavigationBar';
import { db } from '../../data/fireBaseConfig';
import { collection, getDocs } from "firebase/firestore";
import tw from 'twrnc';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [suggestions, setSuggestions] = useState([]);
  const [charts, setCharts] = useState([]);
  const [trendingAlbums, setTrendingAlbums] = useState([]);
  const [popularArtists, setPopularArtists] = useState([]);
  const [loading, setLoading] = useState(true); // Thêm trạng thái loading
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data từ Firestore
        const suggestionsSnap = await getDocs(collection(db, 'suggestion'));
        setSuggestions(suggestionsSnap.docs.map(doc => doc.data()));

        const chartsSnap = await getDocs(collection(db, 'chart'));
        setCharts(chartsSnap.docs.map(doc => doc.data()));

        const trendingAlbumsSnap = await getDocs(collection(db, 'album'));
        setTrendingAlbums(trendingAlbumsSnap.docs.map(doc => doc.data()));

        const popularArtistsSnap = await getDocs(collection(db, 'artist'));
        setPopularArtists(popularArtistsSnap.docs.map(doc => doc.data()));
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      } finally {
        setLoading(false); // Đặt loading thành false sau khi dữ liệu được tải
      }
    };

    fetchData();
  }, []);

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

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView contentContainerStyle={tw`pb-40 px-4`}>
        <View style={tw`pt-10`}>
          {/* Logo */}
          <Image source={require('../../assets/HomeScreen/Logo.png')} style={tw`w-8 h-8`} />

          {/* Notification and Profile Icons */}
          <View style={tw`absolute top-10 right-4 flex-row items-center`}>
            <TouchableOpacity>
              <Ionicons name="notifications-outline" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`ml-4`}>
              <Image source={require('../../assets/HomeScreen/Avatar.png')} style={tw`w-8 h-8 rounded-full`} />
            </TouchableOpacity>
          </View>

          {/* Greeting Text */}
          <Text style={tw`text-lg text-gray-600 mt-5`}>Good morning,</Text>
          <Text style={tw`text-2xl font-bold text-gray-800 mb-5`}>Ashley Scott</Text>

          {/* Search Bar */}
          <View style={tw`flex-row items-center bg-gray-200 rounded-full px-3 py-2`}>
            <Ionicons name="search-outline" size={18} color="#888" style={tw`mr-2`} />
            <TextInput style={tw`flex-1 text-sm`} placeholder="What you want to listen to" placeholderTextColor="#888" />
          </View>
        </View>

        {/* Suggestions Section */}
        <Text style={tw`text-lg font-semibold mt-6 mb-2`}>Suggestions for you</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`pl-1`}>
          {suggestions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`mr-4 w-48 rounded-lg overflow-hidden`}
              onPress={() => navigation.navigate('MusicPlayer', { songs: item })} // Pass the item to MusicPlayer
            >
              <Image source={{ uri: item.imageUrl }} style={tw`w-full h-55`} resizeMode="cover" />
              <View style={tw`absolute bottom-0 w-full bg-black bg-opacity-40 p-2`}>
                <Text style={tw`text-sm font-semibold text-white`}>{item.title}</Text>
                <Text style={tw`text-xs text-gray-200`}>{item.artist}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>


        {/* Charts Section */}
        <View style={tw`flex-row justify-between items-center mt-6 mb-2`}>
          <Text style={tw`text-lg font-semibold`}>Charts</Text>
          <Text style={tw`text-sm text-gray-500`}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`pl-1`}>
          {charts.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`mr-4 w-36 h-44 rounded-lg overflow-hidden`} // Adjust height to accommodate description
              onPress={() => navigation.navigate('ChartDetails', { chart: item })}
            >
              {/* Background Image */}
              <Image source={{ uri: item.imageUrl }} style={tw`absolute w-full h-36 rounded-lg`} />
              <View style={tw`flex-1 justify-center items-center`}>
                {/* Label and Country */}
                <Text style={tw`text-base font-bold text-white`}>{item.label}</Text>
                <Text style={tw`text-sm text-white`}>{item.country}</Text>
              </View>
              {/* Description */}
              <Text style={tw`text-left text-gray-500 text-xs mt-1`}>
                {item.description || "Daily chart toppers-\n update"}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Trending Albums Section */}
        <View style={tw`flex-row justify-between items-center mt-6 mb-2`}>
          <Text style={tw`text-lg font-semibold`}>Trending albums</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AlbumsScreen')}>
            <Text style={tw`text-sm text-gray-500`}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`pl-1`}>
          {trendingAlbums.map((album, index) => (
            <TouchableOpacity
              key={index}
              style={tw`mr-4 w-32 items-center`}
              onPress={() => navigation.navigate('AlbumScreen', { album })}
            >
              <Image source={{ uri: album.imageUrl }} style={tw`w-28 h-28 rounded-lg`} />
              <Text style={tw`text-sm font-semibold mt-2 text-left`}>{album.title}</Text>
              <Text style={tw`text-xs text-gray-500`}>{album.artist}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* Popular Artists Section */}
        <View style={tw`flex-row justify-between items-center mt-6 mb-2`}>
          <Text style={tw`text-lg font-semibold`}>Popular artists</Text>
          <Text style={tw`text-sm text-gray-500`}>See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`pl-1`}>
          {popularArtists.map((artist, index) => (
            <TouchableOpacity
              key={index}
              style={tw`mr-5 items-center w-24`}
              onPress={() => navigation.navigate('ArtitsScreen', { artist })} // Pass the artist data
            >
              <Image source={{ uri: artist.imageUrl }} style={tw`w-24 h-24 rounded-full mb-2`} />
              <Text style={tw`text-sm text-center text-gray-800`}>{artist.name}</Text>
              <TouchableOpacity style={tw`bg-black px-4 py-1 mt-2 rounded-full`}>
                <Text style={tw`text-sm text-white font-bold`}>Follow</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      {/* MiniPlayer and Navigation Bar */}
      <View style={tw`absolute bottom-0 w-full`}>
        <MiniPlayer />
        <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
      </View>
    </View>
  );
};

export default HomeScreen;

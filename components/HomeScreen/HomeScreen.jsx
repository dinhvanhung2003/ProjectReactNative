import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import MiniPlayer from './MiniPlayer';
import NavigationBar from './NavigationBar';
import tw from 'twrnc';
import {data} from '../../data/data';


const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState('Home'); // Khởi tạo activeTab với giá trị mặc định là 'Home'

    const handleTabPress = (tab) => {
        setActiveTab(tab);
        switch (tab) {
            case 'Home':
                navigation.navigate('HomeScreen');
                break;
            case 'Search':
                navigation.navigate('SearchScreen');
                break;
            case 'Feed':
              navigation.navigate('FeedScreen');
              break;
            case 'Library':
              navigation.navigate('LibraryScreen');
              break;
            default:
                break;
        }
    };
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const suggestions = data.filter(item => item.type === 'suggestion');
    const charts = data.filter(item => item.type === 'chart');
    const trendingAlbums = data.filter(item => item.type === 'album');
    const popularArtists = data.filter(item => item.type === 'artist');
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
                        <View key={index} style={tw`mr-4 w-48 rounded-lg overflow-hidden`}>
                            <Image source={item.imageUrl} style={tw`w-full h-48`} />
                            <View style={tw`absolute bottom-0 w-full bg-black bg-opacity-40 p-2`}>
                                <Text style={tw`text-sm font-semibold text-white`}>{item.title}</Text>
                                <Text style={tw`text-xs text-gray-200`}>{item.artist}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                {/* Charts Section */}
                <View style={tw`flex-row justify-between items-center mt-6 mb-2`}>
                    <Text style={tw`text-lg font-semibold`}>Charts</Text>
                    <Text style={tw`text-sm text-gray-500`}>See all</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`pl-1`}>
                    {charts.map((item, index) => (
                        <TouchableOpacity key={index} style={tw`mr-4 w-36 h-36 rounded-lg overflow-hidden`} onPress={() => navigation.navigate('ChartDetails', { chart: item })}>
                            <Image source={item.imageUrl} style={tw`absolute w-full h-full rounded-lg`} />
                            <View style={tw`flex-1 justify-center items-center`}>
                                <Text style={tw`text-base font-bold text-white`}>{item.label}</Text>
                                <Text style={tw`text-sm text-white`}>{item.country}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Trending Albums Section */}
                <View style={tw`flex-row justify-between items-center mt-6 mb-2`}>
                    <Text style={tw`text-lg font-semibold`}>Trending albums</Text>
                    <Text style={tw`text-sm text-gray-500`}>See all</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`pl-1`}>
                    {trendingAlbums.map((album, index) => (
                        <View key={index} style={tw`mr-4 w-32 items-center`}>
                            <Image source={album.imageUrl} style={tw`w-28 h-28 rounded-lg`} />
                            <Text style={tw`text-sm font-semibold mt-2`}>{album.title}</Text>
                            <Text style={tw`text-xs text-gray-500`}>{album.artist}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Popular Artists Section */}
                <View style={tw`flex-row justify-between items-center mt-6 mb-2`}>
                    <Text style={tw`text-lg font-semibold`}>Popular artists</Text>
                    <Text style={tw`text-sm text-gray-500`}>See all</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`pl-1`}>
                    {popularArtists.map((artist, index) => (
                        <View key={index} style={tw`mr-5 items-center w-24`}>
                            <Image source={artist.imageUrl} style={tw`w-24 h-24 rounded-full mb-2`} />
                            <Text style={tw`text-sm text-center text-gray-800`}>{artist.name}</Text>
                            <TouchableOpacity style={tw`bg-black px-4 py-1 mt-2 rounded-full`}>
                                <Text style={tw`text-sm text-white font-bold`}>Follow</Text>
                            </TouchableOpacity>
                        </View>
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

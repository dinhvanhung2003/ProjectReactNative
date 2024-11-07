import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { data } from '../../data/data'; // Import dữ liệu từ data.js
import MiniPlayer from '../HomeScreen/MiniPlayer';
import NavigationBar from '../HomeScreen/NavigationBar';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Search');

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

    // Function to combine all data from various types
    const getAllData = () => {
        const songs = data
            .filter(item => item.type === 'chart')
            .flatMap(chart => chart.songs.map(song => ({ ...song, parentChart: chart.label, id: `${chart.label}-${song.title}` })));

        const suggestions = data.filter(item => item.type === 'suggestion');
        const albums = data.filter(item => item.type === 'album');
        const artists = data.filter(item => item.type === 'artist');

        return [...songs, ...suggestions, ...albums, ...artists];
    };

    // Filter data based on the search term across different fields
    const filteredData = getAllData().filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.artist?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startSearch = () => {
        setIsSearching(true);
    };

    return (
        <View style={tw`flex-1 bg-white`}>
            {/* Search Bar */}
            <View style={tw`flex-row items-center bg-gray-200 p-4 rounded-full mx-4 my-2`}>
                <Ionicons name="search" size={20} color="gray" style={tw`mr-2`} />
                <TextInput
                    placeholder="Search for songs, artists, albums..."
                    placeholderTextColor="gray"
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    onSubmitEditing={startSearch}
                    style={tw`flex-1 text-lg`}
                />
                {searchTerm.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchTerm('')}>
                        <Ionicons name="close" size={20} color="gray" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Display search results */}
            {isSearching ? (
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id } // Ensure each item has a unique id
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={tw`flex-row items-center p-4 border-b border-gray-200`}
                            onPress={() => {
                                if (item.type === 'song') {
                                    const allSongs = getAllData().filter(data => data.type === 'song');
                                    const songIndex = allSongs.findIndex(song => song.id === item.id);
                                    if (songIndex >= 0) {
                                        navigation.navigate('MusicPlayer', { songs: allSongs, initialIndex: songIndex });
                                    }
                                }
                            }}
                        >
                            {item.backgroundImage && (
                                <Image source={item.backgroundImage} style={tw`w-12 h-12 rounded-full mr-4`} />
                            )}
                            <View style={tw`flex-1`}>
                                <Text style={tw`text-lg font-semibold`}>{item.title || item.name}</Text>
                                <Text style={tw`text-sm text-gray-500`}>
                                    {item.artist || item.followers || item.parentChart || ''}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={tw`pb-24`} // Add padding to avoid overlap with MiniPlayer and NavigationBar
                />
            ) : (
                <FlatList
                    data={getAllData()} // Display all data as suggestions
                    keyExtractor={(item) => item.id || item.title}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={tw`p-4 border-b border-gray-200`}>
                            <Text style={tw`text-lg`}>{item.title || item.name}</Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={tw`pb-24`}
                />
            )}

            {/* MiniPlayer and Navigation Bar */}
            <View style={tw`absolute bottom-0 w-full`}>
                <MiniPlayer />
                <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
            </View>
        </View>
    );
};

export default SearchScreen;

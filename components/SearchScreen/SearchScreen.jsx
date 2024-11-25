import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import MiniPlayer from '../HomeScreen/MiniPlayer';
import NavigationBar from '../HomeScreen/NavigationBar';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [charts, setCharts] = useState([]);
    const [trendingAlbums, setTrendingAlbums] = useState([]);
    const [popularArtists, setPopularArtists] = useState([]);
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Search');

    const db = getFirestore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const suggestionsSnap = await getDocs(collection(db, 'suggestion'));
                setSuggestions(suggestionsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

                const chartsSnap = await getDocs(collection(db, 'chart'));
                setCharts(chartsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

                const trendingAlbumsSnap = await getDocs(collection(db, 'album'));
                setTrendingAlbums(trendingAlbumsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

                const popularArtistsSnap = await getDocs(collection(db, 'artist'));
                setPopularArtists(popularArtistsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error("Error fetching data from Firebase:", error);
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

    const getAllData = () => {
        const songs = charts.flatMap(chart => 
            chart.songs.map(song => ({
                ...song,
                parentChart: chart.label,
                id: `${chart.id}-${song.id}`
            }))
        );

        return [
            ...suggestions,
            ...songs,
            ...trendingAlbums,
            ...popularArtists
        ];
    };

    const filteredData = getAllData().filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.artist?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startSearch = () => {
        setIsSearching(true);
    };

    return (
        <View style={tw`flex-1 bg-white mt-10`}>
            {/* Search Bar */}
            <View style={tw`flex-row items-center bg-gray-200 p-4 rounded-full mx-4 my-2`}>
                <Ionicons name="search" size={20} color="gray" style={tw`mr-2`} />
                <TextInput
                    placeholder="Search for songs, artists, albums..."
                    placeholderTextColor="gray"
                    value={searchTerm}
                    onChangeText={(text) => {
                        setSearchTerm(text);
                        setIsSearching(text.length > 0);
                    }}
                    style={tw`flex-1 text-lg`}
                />
                {searchTerm.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchTerm('')}>
                        <Ionicons name="close" size={20} color="gray" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Display search results if there is a search term */}
            {isSearching && searchTerm.length > 0 ? (
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id}
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
                                } else if (item.type === 'artist') {
                                    navigation.navigate('ArtitsScreen', { artist: item });
                                }
                            }}
                        >
                            {item.imageUrl && (
                                <Image source={{ uri: item.imageUrl }} style={tw`w-12 h-12 rounded-full mr-4`} />
                            )}
                            <View style={tw`flex-1`}>
                                <Text style={tw`text-lg font-semibold`}>{item.title || item.name}</Text>
                                <Text style={tw`text-sm text-gray-500`}>
                                    {item.artist || item.followers || item.parentChart || ''}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={tw`pb-24`}
                />
            ) : (
                <View style={tw`flex-1 items-center justify-center`}>
                    <Text style={tw`text-gray-500 text-lg`}>Start typing to search...</Text>
                </View>
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

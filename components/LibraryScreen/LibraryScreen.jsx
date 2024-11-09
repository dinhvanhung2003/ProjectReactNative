import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { data } from '../../data/data'; // Import data from data.js
import MiniPlayer from '../HomeScreen/MiniPlayer';
import NavigationBar from '../HomeScreen/NavigationBar';

const LibraryScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Library');

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
            default:
                break;
        }
    };

    // Extract only the "library" items from the data
    const libraryData = data.find(item => item.type === 'library')?.data || [];

    const renderLibraryItem = ({ item }) => (
        <View style={tw`flex-row items-center justify-between mb-3 pl-4 pr-4`}>
             {/* Singer */}
            {item.type === 'singer' && (
                <View style={tw`flex-row items-center justify-between mb-3`}>
                    <Image source={item.avatar} style={tw`w-16 h-16 rounded-full`} />  
                    <View style={tw`flex-1 ml-3`}>
                        <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
                        <View style={tw`flex-row items-center`}>
                            <Ionicons name="person-outline" size={14} color="#666" />
                            <Text style={tw`text-sm text-gray-600 ml-1`}>
                                {item.artist || `${item.followers} followers`}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={tw`px-3 py-1 bg-slate-900 rounded-lg`}>
                        <Text style={tw`text-white`}>Follow</Text>
                    </TouchableOpacity>
                </View>
                                    
            )}
             {/* Songs */}
            {item.type === 'song' && (
                <View style={tw`flex-row items-center justify-between mb-3`}>
                    <Image source={item.imageUrl} style={tw`w-16 h-16 rounded-none`} />
                    <View style={tw`flex-1 ml-3`}>
                        <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
                        <Text style={tw`text-sm text-gray-600`}>
                            {item.artist || `${item.followers} followers`}
                        </Text>
                        <View style={tw`w-36 flex-row justify-between    items-center`}>
                            <View style={tw`flex-row items-center`}>
                                <Ionicons name="play-outline" size={14} color="#666" />
                                <Text style={tw`text-sm text-gray-600 ml-1 mr-3`}>{item.plays} plays</Text>
                            </View>
                            <View style={tw`flex-row items-center`}>
                                <Ionicons name="radio-button-on-outline" size={14} color="#666" />
                                <Text style={tw`text-sm text-gray-600 ml-1`}>{item.length}</Text> 
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="heart" size={20} color="#FF4500" />
                    </TouchableOpacity>                  
                </View>
            )}
             {/* Album */}
            {item.type === 'album' && (
                <View style={tw`flex-row items-center justify-between mb-3`}>
                    <Image source={item.imageUrl} style={tw`w-16 h-16 rounded-none`} />
                    <View style={tw`flex-1 ml-3`}>
                        <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
                        <View style={tw`flex-row w-full items-center`}>
                            <Text style={tw`text-sm text-gray-600 mr-10`}>
                                {item.artist || `${item.followers} followers`}
                            </Text>
                            <View style={tw`flex-row items-center`}>
                                <Ionicons name="radio-button-on-outline" size={14} color="#666" />
                                <Text style={tw`text-sm text-gray-600 ml-1`}>{item.songs} songs</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Ionicons name="chevron-forward-outline" size={14} color="#666" />
                    </TouchableOpacity>             
                </View>
            )}
        </View>
    );

    return (
        <View style={tw`flex-1 bg-white`}>
            {/* Library Screen Header */}
            <View style={tw`flex-row items-center justify-between px-5 py-3 mt-10`}>
                <Text style={tw`text-xl font-bold`}>Library</Text>
                <Ionicons name="search-outline" size={24} color={activeTab === '#666'} />
            </View>
            <View style={tw`py-3`}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={tw`w-24 h-12 items-center ml-2 mr-2 bg-slate-300 rounded-3xl p-2`} onPress={() => navigation.navigate('PlaylistsScreen')}>
                        <Text style={tw`text-lg font-semibold`}>Playlists</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`w-24 h-12 items-center mr-2 bg-slate-300 rounded-3xl p-2`}>
                        <Text style={tw`text-lg font-semibold`}>New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`w-24 h-12 items-center mr-2 bg-slate-300 rounded-3xl p-2`}>
                        <Text style={tw`text-lg font-semibold`}>Songs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`w-24 h-12 items-center mr-2 bg-slate-300 rounded-3xl p-2`}>
                        <Text style={tw`text-lg font-semibold`}>Albums</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`w-24 h-12 items-center mr-2 bg-slate-300 rounded-3xl p-2`}>
                        <Text style={tw`text-lg font-semibold`}>Artists</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={tw`flex-1 mb-14`}>
                {/* Library List */}
                <FlatList
                    data={libraryData} // Use only the items inside "library.data"
                    renderItem={renderLibraryItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={tw`items-center`}
                />
            </View>

            {/* MiniPlayer and Navigation Bar */}
            <View style={tw`absolute bottom-0 w-full`}>
                <MiniPlayer />
                <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />
            </View>
        </View>
    );
};

export default LibraryScreen;

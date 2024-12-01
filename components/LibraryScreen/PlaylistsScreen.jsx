import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import { data2 } from '../../data/data2'; 

import MiniPlayer from '../HomeScreen/MiniPlayer';
import NavigationBar from '../HomeScreen/NavigationBar';

const PlaylistsScreen = () => {
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
    const libraryData = data2.find(item => item.type === 'ibrary')?.data || [];

    const renderLibraryItem = ({ item }) => (
        <View style={tw`flex-row items-center justify-between mb-3 pl-4 pr-4`}>

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
                                <Text style={tw`text-sm text-gray-600`}>{item.songs} songs</Text>
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
                <Text style={tw`text-xl font-bold`}>PlaylistsScreen</Text>
                <Ionicons name="search-outline" size={24} color={activeTab === '#666'} />
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

export default PlaylistsScreen;

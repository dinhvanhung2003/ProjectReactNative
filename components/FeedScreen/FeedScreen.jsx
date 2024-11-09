import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { data2 } from '../../data/data2'; // Import data from data.js
import MiniPlayer from '../HomeScreen/MiniPlayer';
import NavigationBar from '../HomeScreen/NavigationBar';

const FeedScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Feed');

    const handleTabPress = (tab) => {
        setActiveTab(tab);
        switch (tab) {
            case 'Home':
                navigation.navigate('HomeScreen');
                break;
            case 'Search':
                navigation.navigate('SearchScreen');
                break;
            case 'Library':
                navigation.navigate('LibraryScreen');
                break;
            default:
                break;
        }
    };

    // Filter the data to only include items of type 'feed'
    const feedData = data2.filter(item => item.type === 'feed');

    const renderFeedItem = ({ item }) => (
        <View style={tw`w-11/12 my-2 p-4 rounded-lg bg-white`}>
            {/* Header with Avatar and Author's Name */}
            <View style={tw`flex-row items-center mb-3`}>
                {item.author && item.author.avatar ? (
                    <Image source={item.author.avatar} style={tw`w-12 h-12 rounded-full`} />
                ) : (
                    <Image source={require('../../assets/HomeScreen/Avatar.png')} style={tw`w-12 h-12 rounded-full`} />
                )}
                <View style={tw`ml-3`}>
                    <Text style={tw`text-lg font-semibold`}>{item.author ? item.author.name : 'Unknown'}</Text>
                    <View style={tw`w-32 flex-row justify-between`}>
                        <Text style={tw`text-sm text-gray-600`}>{item.action || 'Posted something'}</Text>
                        <Text style={tw`text-sm text-gray-600`}>{"• " + item.time || 'Posted something'}</Text>
                    </View>
                </View>
            </View>

            {/* Song Image and Details */}
            <View style={tw`mt-2`}>
                <ImageBackground
                    source={item.song.imageUrl}
                    style={tw`w-full h-80 flex-row`}
                    imageStyle={tw`rounded-lg`}
                >
                    <View style={tw`w-full h-24 p-4 pt-5 bg-black bg-opacity-60 rounded-lg self-end`}>
                        <Text style={tw`text-2xl font-bold text-white`}>
                            {item.song ? item.song.title : 'Unknown Title'}
                        </Text>
                        <View style={tw`text-xs font-bold flex-row justify-between items-center`}>
                            <Text style={tw`text-lg text-white`}>{item.song ? item.song.author : 'Unknown Artist'}</Text>
                            <View style={tw`w-28 flex-row justify-between`}>
                                <View style={tw`flex-row items-center`}>
                                    <Ionicons name="play-outline" size={20} color="#ffffff" />
                                    <Text style={tw`text-sm text-white ml-1`}>{item.song ? item.song.plays : 'N/A'}</Text>
                                </View>
                                <View style={tw`flex-row items-center`}>
                                    <Ionicons name="radio-button-on-outline" size={20} color="#ffffff" />
                                    <Text style={tw`text-sm text-white ml-1`}>{item.song ? item.song.length : 'N/A'}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            {/* Like, Comment, and Share Counts */}
            <View style={tw`flex-row items-center mt-3 justify-between`}>
                <View style={tw`flex-row items-center justify-between w-36`}>
                    <View style={tw`flex-row items-center mr-6`}>
                        <FontAwesome name="heart" size={20} color="#FF4500" />
                        <Text style={tw`ml-1`}>{item.like || 0}</Text>
                    </View>
                    <View style={tw`flex-row items-center`}>
                        <Ionicons name="chatbubble-outline" size={20} color="#666" />
                        <Text style={tw`ml-1`}>{item.comment ? item.comment.length : 0}</Text>
                    </View>
                    <View style={tw`flex-row items-center`}>
                        <Ionicons name="share-social-outline" size={20} color="#666" />
                        <Text style={tw`ml-1`}>{item.shares || 0}</Text>
                    </View>
                </View>
                <Ionicons name="ellipsis-horizontal-outline" size={20} color="#666" />
            </View>
        </View>
    );

    return (
        <View style={tw`flex-1 bg-white`}>
            {/* FeedScreen Header */}
            <View style={tw`flex-row items-center justify-between px-5 py-3 mt-10`}>
                <Text style={tw`text-xl font-bold`}>Feed</Text>
                <Ionicons name="tv-outline" size={24} color={activeTab === '#666'} />
            </View>
            <View style={tw`flex-1 mb-14`}>
                {/* Feed List */}
                <FlatList
                    data={feedData}
                    renderItem={renderFeedItem}
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

export default FeedScreen;

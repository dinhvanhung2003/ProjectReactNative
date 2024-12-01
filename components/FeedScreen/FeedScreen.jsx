import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ImageBackground,
    Modal,
    TextInput,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import { data2 } from '../../data/dataTemp';

import MiniPlayer from '../HomeScreen/MiniPlayer';
import NavigationBar from '../HomeScreen/NavigationBar';

const FeedScreen = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Feed');
    const [isCommentPanelVisible, setCommentPanelVisible] = useState(false);
    const [selectedFeed, setSelectedFeed] = useState(null);
    const [newComment, setNewComment] = useState(''); 

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

    const openCommentPanel = (feed) => {
        setSelectedFeed(feed);
        setCommentPanelVisible(true);
    };

    const closeCommentPanel = () => {
        setCommentPanelVisible(false);
        setSelectedFeed(null);
        setNewComment(''); // Clear the text field when closing
    };

    const addComment = () => {
        if (newComment.trim() === '') return; // Ignore empty comments
        const updatedFeed = {
            ...selectedFeed,
            comment: [
                ...(selectedFeed.comment || []),
                {
                    avatar: require('../../assets/HomeScreen/Avatar.png'), // Default avatar
                    userName: 'You', // Placeholder for user's name
                    text: newComment,
                    time: 'Just now',
                    likes: 0,
                },
            ],
        };
        // Update the data array
        const updatedData = data2.map((item) =>
            item === selectedFeed ? updatedFeed : item
        );
        data2.splice(0, data2.length, ...updatedData); // Update `data2` directly
        setSelectedFeed(updatedFeed);
        setNewComment('');
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
                                        <TouchableOpacity 
                                        style={tw`flex-row items-center w-5`} 
                                        onPress={() => navigation.navigate('MusicPlayer', { songs: item.song.songs })}
                                        >
                                        <Ionicons name="play-outline" size={20} color="#ffffff" />
                                        <Text style={tw`text-sm text-gray-600 ml-1 mr-3`}>{item.plays}</Text>
                                    </TouchableOpacity>
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
                        <TouchableOpacity style={tw`flex-row items-center`}>
                            <FontAwesome name="heart" size={20} color="#FF4500" />
                        </TouchableOpacity>
                        <Text style={tw`ml-1`}>{item.like || 0}</Text>
                    </View>
                    <TouchableOpacity
                        style={tw`flex-row items-center mr-6`}
                        onPress={() => openCommentPanel(item)}
                    >
                        <Ionicons name="chatbubble-outline" size={20} color="#666" />
                        <Text style={tw`ml-1`}>{item.comment ? item.comment.length : 0}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex-row items-center`}>
                        <Ionicons name="share-social-outline" size={20} color="#666" />
                        <Text style={tw`ml-1`}>{item.shares || 0}</Text>
                    </TouchableOpacity>
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

            {/* CommentPanel Overlay */}
{isCommentPanelVisible && (
    <View style={tw`absolute bottom-0 w-full h-full bg-opacity-50 bg-black`}>
        <View style={tw`absolute bottom-0 w-full h-3/5 bg-white rounded-t-xl p-4 shadow-lg`}>
            <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-lg font-bold`}>Comments</Text>
                <TouchableOpacity onPress={closeCommentPanel}>
                    <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={selectedFeed?.comment || []}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={tw`flex-row items-start my-2`}>
                        {/* Comment Avatar */}
                        <Image
                            source={item.avatar}
                            style={tw`w-10 h-10 rounded-full mr-3`}
                        />
                        {/* Comment Content */}
                        <View style={tw`flex-1`}>
                            <View style={tw`flex-row justify-between`}>
                                <View style={tw`flex-col`}>
                                    <View style={tw`flex-row`}>
                                        <Text style={tw`font-bold text-gray-900 mr-5`}>{item.userName}</Text>
                                        <Text style={tw`text-sm text-gray-700`}>{item.text}</Text>
                                    </View>
                                    <View style={tw`flex-row w-32 justify-around`}>
                                        <Text style={tw`text-xs text-gray-500`}>{item.time}</Text>
                                        <Text style={tw`text-xs text-gray-500`}>{item.likes} likes</Text>
                                        <Text style={tw`text-xs text-gray-500`}>Reply</Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Ionicons name="thumbs-up-outline" size={20} color="black" />
                                </TouchableOpacity>
                            </View>

                            {/* Render Replies */}
                            {item.replies && item.replies.length > 0 && (
                                <View style={tw`mt-2 pl-5`}>
                                    {item.replies.map((reply, index) => (
                                        <View key={index} style={tw`flex-row items-start mb-2`}>
                                            {/* Reply Avatar */}
                                            <Image
                                                source={reply.avatar}
                                                style={tw`w-8 h-8 rounded-full mr-3`}
                                            />
                                            {/* Reply Content */}
                                            <View style={tw`flex-1`}>
                                                <View style={tw`flex-row justify-between`}>
                                                    <View style={tw`flex-col`}>
                                                        <View style={tw`flex-row`}>
                                                            <Text style={tw`font-bold text-gray-700 mr-5`}>{reply.userName}</Text>
                                                            <Text style={tw`text-sm text-gray-600`}>{reply.text}</Text>
                                                        </View>
                                                        <View style={tw`flex-row w-32 justify-around`}>
                                                            <Text style={tw`text-xs text-gray-500`}>{reply.time}</Text>
                                                            <Text style={tw`text-xs text-gray-500`}>{reply.likes} likes</Text>
                                                            <Text style={tw`text-xs text-gray-500`}>Reply</Text>
                                                        </View>
                                                    </View>
                                                    <TouchableOpacity>
                                                        <Ionicons name="thumbs-up-outline" size={20} color="black" />
                                                    </TouchableOpacity>
                                                </View>
                                                
                                            </View>
                                            
                                        </View>
                                    ))}
                                </View>
                            )}
                        </View>
                    </View>
                )}
            />
            <View style={tw`flex-row mt-4 items-center`}>
                {/* Avatar on the left */}
                <Image
                    source={require('../../assets/HomeScreen/Avatar.png')} // Replace with the actual user avatar
                    style={tw`w-10 h-10 rounded-full mr-3`}
                />
                {/* TextInput for comment */}
                <TextInput
                    value={newComment}
                    onChangeText={setNewComment}
                    placeholder="Add a comment..."
                    style={tw`flex-1 bg-gray-200 p-3 rounded-lg`}
                    onSubmitEditing={addComment} // Save comment on pressing Enter
                />
            </View>
        </View>
    </View>
)}

        </View>
    );
};

export default FeedScreen;

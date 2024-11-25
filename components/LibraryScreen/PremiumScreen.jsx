import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import { data2 } from '../../data/dataTemp'; 

import MiniPlayer from '../HomeScreen/MiniPlayer';
import NavigationBar from '../HomeScreen/NavigationBar';

const PremiumScreen = () => {
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

    return (
        <ImageBackground 
            source={require('../../assets/LibraryScreen/PremiumScreenBackground.png')}
            style={tw`flex-1 flex-col justify-between py-10`}
        >
            
            {/* Library Screen Header */}
            <View style={tw`flex-col items-center justify-between justify-center mt-40`}>
                <Image
                    style={tw`w-30 h-30 self-center mb-60`}
                    source={require('../../assets/LibraryScreen/Logo.png')}
                    resizeMode="contain" 
                />
                <Text style={tw`text-4xl font-bold text-white text-center`}>Welcome to{"\n"}Premium</Text>
                <Ionicons name="ellipsis-horizontal-outline" size={40} color= '#ffffff' />
            </View>
            
            <View>
                <TouchableOpacity style={tw`self-center w-64 h-12 items-center ml-2 mr-2 bg-black rounded-full p-2`} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={tw`text-xl font-semibold text-white`}>Start listening</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default PremiumScreen;

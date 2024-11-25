import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import { data2 } from '../../data/dataTemp'; 

import MiniPlayer from '../HomeScreen/MiniPlayer';
import NavigationBar from '../HomeScreen/NavigationBar';


const PlanScreen = () => {
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
            source={require('../../assets/LibraryScreen/PlanScreenBackground.png')}
            style={tw`flex-1 flex-col justify-between`}
        >
            {/* Library Screen Header */}
            <View style={tw`flex-row items-center justify-between justify-center mt-30`}>
                <Text style={tw`text-4xl font-bold text-white text-center`}>Unlimited{"\n"}music selections</Text>
            </View>
            <View style={tw`flex-1 pb-30 pt-10 items-center`}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>      
                    <View style={tw` bg-white rounded-2xl w-70 h-100 py-6 px-4`}>
                        <Text style={tw`font-bold text-3xl`}>Premium</Text>
                        <View style={tw`mt-2 flex-row items-center justify-around`}>
                            <View style={tw`bg-pink-100 p-3 rounded-full`}>
                                <Text style={tw`text-pink-500`}>Free for 1 month</Text>
                            </View>
                            <View>
                                <Text style={tw`text-base font-bold`}>$12.99/ month</Text>
                            </View>
                        </View>
                        <View style={tw`my-5 flex-col`}>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Ad-free listening</Text>
                            </View>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Download to listen offline</Text>
                            </View>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Access full catalog Premium</Text>
                            </View>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Hight sound quality</Text>
                            </View>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Cancel anytime</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={tw`self-center w-52 h-12 items-center ml-2 mr-2 bg-black rounded-3xl p-2`} onPress={() => navigation.navigate('PremiumScreen')}>
                            <Text style={tw`text-lg font-semibold text-white`}>Subcribe now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={tw` bg-white rounded-2xl w-70 h-100 py-6 px-4`}>
                        <Text style={tw`font-bold text-3xl`}>Premium</Text>
                        <View style={tw`mt-2 flex-row items-center justify-around`}>
                            <View style={tw`bg-pink-100 p-3 rounded-full`}>
                                <Text style={tw`text-pink-500`}>Free for 1 month</Text>
                            </View>
                            <View>
                                <Text style={tw`text-base font-bold`}>$12.99/ month</Text>
                            </View>
                        </View>
                        <View style={tw`my-5 flex-col`}>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Ad-free listening</Text>
                            </View>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Download to listen offline</Text>
                            </View>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Access full catalog Premium</Text>
                            </View>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Hight sound quality</Text>
                            </View>
                            <View style={tw`mt-2 flex-row items-center`}>
                                <Ionicons name="checkmark-outline" size={20} color="#FF7AE2" />
                                <Text style={tw`text-base ml-3`}>Cancel anytime</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={tw`self-center w-52 h-12 items-center ml-2 mr-2 bg-black rounded-3xl p-2`} onPress={() => navigation.navigate('PremiumScreen')}>
                            <Text style={tw`text-lg font-semibold text-white`}>Subcribe now</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Ionicons name="ellipsis-horizontal-outline" size={40} color= '#ffffff' />
            </View>
            <View style={tw`absolute bottom-0 w-full content-center items-center h-20`}>
               
                <TouchableOpacity style={tw`w-full h-24`} onPress={()=>navigation.navigate('HomeScreen')}>
                    <View style={tw`absolute bottom-0 w-full content-center items-center h-24`}>
                        <Text style={tw`text-white text-lg`}>Back Home</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
            

        </ImageBackground>
    );
};

export default PlanScreen;

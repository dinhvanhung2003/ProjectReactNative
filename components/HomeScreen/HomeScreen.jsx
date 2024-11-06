import React,{useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';
import MiniPlayer from './MiniPlayer';
import NavigationBar from './NavigationBar';
// Sample data arrays
const suggestions = [
    { title: 'Reflection', artist: 'Christina Aguilera', imageUrl: require('../../assets/HomeScreen/Suggestion1.png') },
    { title: 'In The Stars', artist: 'Benson Boone', imageUrl: require('../../assets/HomeScreen/Suggestion2.png') }
];

export const charts = [
    {
        country: 'Canada',
        label: 'Top 50',
        imageUrl: require('../../assets/HomeScreen/BackGroundChart.png'),
        songs: [
            { 
                title: 'FLOWER', 
                artist: 'Jessica Gonzalez', 
                plays: '2M', 
                duration: '3:10',
                audioUrl: require('../../assets/songs/test.mp3'), // Local MP3 file
                backgroundImage: require('../../assets/HomeScreen/MusicPlayerImage.png') // Local background image
            },
            { 
                title: 'Sau Lời Từ Khước', 
                artist: 'Phan Mạnh Quỳnh', 
                plays: '6M', 
                duration: '3:35',
                audioUrl: require('../../assets/songs/test01.mp3'), // Local MP3 fileMP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageSauLoiTuKhuoc.jpg') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            { 
                title: 'Thủy Triều', 
                artist: 'Quang Hùng Master D', 
                plays: '9M', 
                duration: '4:39',
                audioUrl: require('../../assets/songs/test02.mp3'), // Local MP3 fileal MP3 file
                backgroundImage: require('../../assets/HomeScreen/ImageThuyTrieu.png') // Local background image
            },
            // Add more songs as needed
        ]
    },
    {
        country: 'Global',
        label: 'Top 50',
        imageUrl: require('../../assets/HomeScreen/BackGroundChart.png'),
        songs: [
            { 
                title: 'Levitating', 
                artist: 'Anthony Taylor', 
                plays: '8M', 
                duration: '3:48',
                audioUrl: require('../../assets/songs/test.mp3'), // Local MP3 filele
                backgroundImage: require('../../assets/HomeScreen/MusicPlayerImage.png') // Local background image
            },
            { 
                title: 'Astronaut in the Ocean', 
                artist: 'Pedro Moreno', 
                plays: '2M', 
                duration: '3:36',
                audioUrl: require('../../assets/songs/test.mp3'), // Local MP3 fileile
                backgroundImage: require('../../assets/HomeScreen/MusicPlayerImage.png') // Local back background image
            },
            // Add more songs as needed
        ]
    },
    {
        country: 'Thailand',
        label: 'Top 50',
        imageUrl: require('../../assets/HomeScreen/BackGroundChart.png'),
        songs: [
            { 
                title: 'Dynamite', 
                artist: 'Elena Jimenez', 
                plays: '10M', 
                duration: '4:22',
                audioUrl: require('../../assets/songs/test.mp3'), // Local MP3 file
                backgroundImage: require('../../assets/HomeScreen/MusicPlayerImage.png') // Local backckground image
            },
            // Add more songs as needed
        ]
    }
];

const trendingAlbums = [
    { title: 'ME', artist: 'Jessica Gonzalez', imageUrl: require('../../assets/HomeScreen/Trending.png') },
    { title: 'Magna Nost', artist: 'Brian Thomas', imageUrl: require('../../assets/HomeScreen/Trending.png') },
    { title: 'Magna Intrum', artist: 'Christopher Nolan', imageUrl: require('../../assets/HomeScreen/Trending.png') }
];

const popularArtists = [
    { name: 'Jennifer Wilson', imageUrl: require('../../assets/HomeScreen/Artists.png') },
    { name: 'Elizabeth Hall', imageUrl: require('../../assets/HomeScreen/Artists.png') },
    { name: 'Anthony Smith', imageUrl: require('../../assets/HomeScreen/Artists.png') }
];

const HomeScreen = () => {
    const [activeTab, setActiveTab] = useState('Home'); // Khởi tạo activeTab với giá trị mặc định là 'Home'

  const handleTabPress = (tab) => {
    setActiveTab(tab); // Cập nhật tab hiện tại
    // Thực hiện điều hướng hoặc logic khác nếu cần
  };
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return (
        <ScrollView style={styles.container}>

            <View style={styles.headerContainer}>
                {/* Logo */}
                <Image source={require('../../assets/HomeScreen/Logo.png')} style={styles.logo} />

                {/* Notification and Profile Icons */}
                <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color="#666" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileIconContainer}>
                        <Image
                            source={require('../../assets/HomeScreen/Avatar.png')}
                            style={styles.profileIcon}
                        />
                    </TouchableOpacity>
                </View>

                {/* Greeting Text */}
                <Text style={styles.greetingText}>Good morning,</Text>
                <Text style={styles.userName}>Ashley Scott</Text>

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <Ionicons name="search-outline" size={18} color="#888" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="What you want to listen to"
                        placeholderTextColor="#888"
                    />
                </View>
            </View>

            {/* Suggestions Section */}
            <Text style={styles.sectionTitle}>Suggestions for you</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {suggestions.map((item, index) => (
                    <View key={index} style={styles.suggestionItem}>
                        <Image source={item.imageUrl} style={styles.suggestionImage} />
                        <View style={styles.suggestionTextContainer}>
                            <Text style={styles.suggestionTitle}>{item.title}</Text>
                            <Text style={styles.suggestionArtist}>{item.artist}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* Charts Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Charts</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {charts.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.chartItemContainer}
                        onPress={() => navigation.navigate('ChartDetails', { chart: item })}
                    >
                        <Image source={item.imageUrl} style={styles.chartBackground} />
                        <View style={styles.chartContent}>
                            <Text style={styles.chartLabel}>{item.label}</Text>
                            <Text style={styles.chartCountry}>{item.country}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Trending Albums Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Trending albums</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {trendingAlbums.map((album, index) => (
                    <View key={index} style={styles.albumItem}>
                        <Image source={album.imageUrl} style={styles.albumImage} />
                        <Text style={styles.albumTitle}>{album.title}</Text>
                        <Text style={styles.albumArtist}>{album.artist}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Popular Artists Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Popular artists</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {popularArtists.map((artist, index) => (
                    <View key={index} style={styles.artistItem}>
                        <Image source={artist.imageUrl } style={styles.artistImage} />
                        <Text style={styles.artistName}>{artist.name}</Text>
                        <TouchableOpacity style={styles.followButton}>
                            <Text style={styles.followText}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <MiniPlayer />
            {/* Navigation Bar */}
            <NavigationBar activeTab={activeTab} onTabPress={handleTabPress} />


        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        paddingTop: 40, // To add some padding for the status bar
        paddingHorizontal: 16,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 30,
        height: 30,
    },
    iconsContainer: {
        position: 'absolute',
        top: 40,
        right: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileIconContainer: {
        marginLeft: 16,
    },
    profileIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    greetingText: {
        fontSize: 16,
        color: '#666',
        marginTop: 20,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
    },
    horizontalScroll: {
        paddingLeft: 5,
    },
    // Suggestions
    suggestionItem: {
        marginRight: 15,
        alignItems: 'center',
        width: 150,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',

        shadowOpacity: 0.3,
        shadowRadius: 4,

    },
    suggestionImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    suggestionTextContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    suggestionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    suggestionArtist: {
        fontSize: 12,
        color: '#ccc',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    seeAll: {
        color: '#888',
        fontSize: 14,
    },
    chartItemContainer: {
        marginRight: 15,
        width: 150,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',


    },
    chartBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    chartLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    chartCountry: {
        fontSize: 14,
        color: '#fff',

    },

    albumItem: {
        marginRight: 15,
        alignItems: 'center',
    },
    albumImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    albumTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
    },
    albumArtist: {
        fontSize: 12,
        color: '#888',
    },
    artistItem: {
        marginRight: 20,
        alignItems: 'center',
        width: 120, // Increased width for better spacing
    },
    artistImage: {
        width: 100, // Increased image size
        height: 100,
        borderRadius: 50, // Make the image circular
        marginBottom: 10,
    },
    artistName: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
    followButton: {
        backgroundColor: '#000', // Dark background for Follow button
        paddingVertical: 8, // Adjusted for better visibility
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    followText: {
        fontSize: 14, // Slightly larger font size for emphasis
        color: '#fff',
        fontWeight: 'bold',
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 80,
    },
    navigationBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#666',
    },
    navTextActive: {
        color: '#00BFFF', // Highlighted color for the active tab
    },
});

export default HomeScreen;

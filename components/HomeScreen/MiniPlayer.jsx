import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPlaying } from '../../redux/slices/musicSlice';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import tw from 'twrnc';

const MiniPlayer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize navigation
  const [waveAnim] = useState(new Animated.Value(1));

  const sound = useSelector((state) => state.music.soundInstance);
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const nowPlaying = useSelector((state) => state.music.nowPlaying);

  const handlePlayPause = async () => {
    if (!sound) return;

    try {
      if (isPlaying) {
        await sound.pauseAsync();
        dispatch(setIsPlaying(false));
        waveAnim.setValue(1);
      } else {
        await sound.playAsync();
        dispatch(setIsPlaying(true));
        startWaveAnimation();
      }
    } catch (error) {
      console.error('Error handling play/pause in MiniPlayer:', error);
    }
  };

  const startWaveAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(waveAnim, {
          toValue: 1.5,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(waveAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  // Navigate to the MusicPlayer screen when the MiniPlayer is pressed
  const handleNavigateToMusicPlayer = () => {
    navigation.navigate('MusicPlayer', { songs: [nowPlaying], initialIndex: 0 });
  };

  if (!nowPlaying) return null;

  return (
    <TouchableOpacity onPress={handleNavigateToMusicPlayer} style={tw`flex-row items-center bg-gray-800 p-3`}>
      {/* Song Thumbnail */}
      <Image source={{ uri: nowPlaying.imageUrl }} style={tw`w-10 h-10 rounded mr-3`} />

      {/* Song Info */}
      <View style={tw`flex-1`}>
        <Text style={tw`text-white font-bold text-sm`}>{nowPlaying.title}</Text>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-gray-400 text-xs`}>{nowPlaying.album || 'Album'}</Text>
          <Text style={tw`text-gray-400 text-xs mx-1`}>•</Text>
          <Text style={tw`text-gray-400 text-xs`}>{nowPlaying.artist}</Text>
        </View>
      </View>

      {/* Heart Icon */}
      <TouchableOpacity style={tw`px-3`}>
        <Ionicons name="heart-outline" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Play/Pause Button */}
      <TouchableOpacity onPress={handlePlayPause} style={tw`px-3`}>
        <Ionicons name={isPlaying ? 'pause' : 'play'} size={24} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MiniPlayer;

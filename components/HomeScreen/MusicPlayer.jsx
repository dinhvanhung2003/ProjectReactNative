import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Svg, Rect } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { setNowPlaying, setIsPlaying, setSoundInstance } from '../../redux/slices/musicSlice';
import tw from 'twrnc';

const MusicPlayer = ({ route }) => {
  const { songs, initialIndex = 0 } = route.params;
  const dispatch = useDispatch();

  // If `songs` is an array, use `initialIndex`; otherwise, treat `songs` as a single song object
  const isSongsArray = Array.isArray(songs);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [playbackStatus, setPlaybackStatus] = useState({ position: 0, duration: 0 });
  const [waveAnim] = useState(new Animated.Value(1));

  const sound = useSelector((state) => state.music.soundInstance);
  const isPlaying = useSelector((state) => state.music.isPlaying);

  const currentSong = isSongsArray ? songs[currentIndex] : songs;

  useEffect(() => {
    const loadSound = async () => {
      try {
        if (sound) {
          await sound.stopAsync();
          await sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: currentSong.audioUrl },
        );
        dispatch(setSoundInstance(newSound));
        dispatch(setNowPlaying(currentSong));
        dispatch(setIsPlaying(true));

        newSound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded) {
            setPlaybackStatus({
              position: status.positionMillis,
              duration: status.durationMillis,
            });
            if (status.didJustFinish && isSongsArray) {
              handleNext();
            }
          }
        });

        await newSound.playAsync();
      } catch (error) {
        console.error("Error loading sound:", error);
      }
    };

    loadSound();

    return () => {
      if (sound) {
        sound.unloadAsync().catch((error) => {
          console.error("Error unloading sound:", error);
        });
      }
    };
  }, [currentIndex, currentSong]);

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
      console.error('Error handling play/pause:', error);
    }
  };

  const handleNext = () => {
    if (isSongsArray) {
      setCurrentIndex((currentIndex + 1) % songs.length);
    }
  };

  const handlePrevious = () => {
    if (isSongsArray) {
      setCurrentIndex((currentIndex - 1 + songs.length) % songs.length);
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

  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <ImageBackground source={{ uri: currentSong.imagebackGround }} style={tw`flex-1`} resizeMode="cover">
      <View style={tw`absolute w-full h-full bg-black opacity-50`} />

      <View style={tw`flex-1 justify-between items-center px-5 py-10`}>
        {/* Header */}
        <View style={tw`w-full flex-row justify-between items-center px-5`}>
          <Text style={tw`text-white text-lg`}>Play</Text>
          <Ionicons name="chevron-down" size={24} color="#fff" />
        </View>

        {/* Song Info */}
        <View style={tw`items-center`}>
          <Text style={tw`text-white text-2xl font-bold mb-1`}>{currentSong.title}</Text>
          <Text style={tw`text-gray-400 text-lg`}>{currentSong.artist}</Text>
        </View>

        <Svg height="100" width="100%" style={tw`my-3`}>
          {[...Array(30).keys()].map((i) => {
            const height = Math.random() * 30 + 10; // Generate random height
            return (
              <Rect
                key={i}
                x={i * 12}
                y={100 - height} // Start from the bottom and subtract the height
                width={8}
                height={height}
                fill="#fff"
                rx="3"
              />
            );
          })}
        </Svg>

        {/* Time Display */}
        <View style={tw`flex-row justify-between w-full px-10`}>
          <Text style={tw`text-gray-400 text-sm`}>{formatTime(playbackStatus.position)}</Text>
          <Text style={tw`text-gray-400 text-sm`}>{formatTime(playbackStatus.duration)}</Text>
        </View>

        {/* Control Buttons */}
        <View style={tw`flex-row justify-between items-center w-10/12 mt-5`}>
          <MaterialIcons name="shuffle" size={24} color="#fff" />
          <TouchableOpacity onPress={handlePrevious} style={tw`p-2`}>
            <Ionicons name="play-back" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePlayPause} style={tw`bg-white w-20 h-20 rounded-full flex items-center justify-center`}>
            <Ionicons name={isPlaying ? 'pause' : 'play'} size={48} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNext} style={tw`p-2`}>
            <Ionicons name="play-forward" size={32} color="#fff" />
          </TouchableOpacity>
          <MaterialIcons name="repeat" size={24} color="#fff" />
        </View>

        {/* Social Buttons */}
        <View style={tw`flex-row justify-around items-center w-3/5 mt-5`}>
          <Text style={tw`text-white text-sm`}>12K</Text>
          <Text style={tw`text-white text-sm`}>450</Text>
          <Ionicons name="share-social-outline" size={24} color="#fff" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default MusicPlayer;

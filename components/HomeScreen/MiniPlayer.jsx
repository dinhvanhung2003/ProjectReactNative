import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPlaying } from '../../redux/slices/musicSlice';

const MiniPlayer = () => {
  const dispatch = useDispatch();
  const [waveAnim] = useState(new Animated.Value(1));

  const sound = useSelector((state) => state.music.soundInstance);
  const isPlaying = useSelector((state) => state.music.isPlaying);
  const nowPlaying = useSelector((state) => state.music.nowPlaying);

  const handlePlayPause = async () => {
    if (!sound) return; // Kiểm tra nếu sound chưa tải xong, không thực hiện gì

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

  if (!nowPlaying) return null;

  return (
    <View style={styles.container}>
      <View style={styles.songInfoContainer}>
        <Image source={nowPlaying.backgroundImage} style={styles.songImage} />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>{nowPlaying.title}</Text>
          <Text style={styles.songArtist}>{nowPlaying.artist}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handlePlayPause} style={styles.playPauseButton}>
        <Ionicons name={isPlaying ? 'pause' : 'play'} size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  songInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  songImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#aaa',
  },
  playPauseButton: {
    padding: 10,
  },
});

export default MiniPlayer;

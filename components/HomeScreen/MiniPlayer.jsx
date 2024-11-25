import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { togglePlayPause, playNext, playPrevious } from '../../redux/slices/musicSlice';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';

const MiniPlayer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Lấy trạng thái từ Redux
  const nowPlaying = useSelector((state) => state.music.nowPlaying);
  const isPlaying = useSelector((state) => state.music.isPlaying);

  // Không hiển thị MiniPlayer nếu không có bài hát đang phát
  if (!nowPlaying) return null;

  return (
    <View style={tw`flex-row items-center bg-gray-800 p-3`}>
      {/* Điều hướng tới MusicPlayer */}
      <TouchableOpacity
        onPress={() => navigation.navigate('MusicPlayer')}
        style={tw`flex-row items-center flex-1`}
      >
        {/* Hình ảnh bài hát */}
        <Image source={{ uri: nowPlaying.imageUrl }} style={tw`w-10 h-10 rounded mr-3`} />

        {/* Thông tin bài hát */}
        <View>
          <Text style={tw`text-white font-bold text-sm`}>{nowPlaying.title}</Text>
          <Text style={tw`text-gray-400 text-xs`}>{nowPlaying.artist}</Text>
        </View>
      </TouchableOpacity>

      {/* Nút Previous */}
      <TouchableOpacity
        onPress={(e) => {
          e.stopPropagation(); // Ngăn điều hướng khi bấm nút
          dispatch(playPrevious());
        }}
        style={tw`px-3`}
      >
        <Ionicons name="play-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Nút Play/Pause */}
      <TouchableOpacity
        onPress={(e) => {
          e.stopPropagation(); // Ngăn điều hướng khi bấm nút
          dispatch(togglePlayPause());
        }}
        style={tw`px-3`}
      >
        <Ionicons name={isPlaying ? 'pause' : 'play'} size={24} color="#fff" />
      </TouchableOpacity>

      {/* Nút Next */}
      <TouchableOpacity
        onPress={(e) => {
          e.stopPropagation(); // Ngăn điều hướng khi bấm nút
          dispatch(playNext());
        }}
        style={tw`px-3`}
      >
        <Ionicons name="play-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default MiniPlayer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nowPlaying: null,
  isPlaying: false,
  soundInstance: null,
  playbackPosition: 0, // Added to track the current playback position
  playbackDuration: 0, // Added to track the total duration of the audio
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
      state.isPlaying = true;
      state.playbackPosition = 0; // Reset position when a new track starts
      state.playbackDuration = 0; // Reset duration when a new track starts
    },
    togglePlayPause: (state) => {
      if (state.soundInstance) {
        if (state.isPlaying) {
          state.soundInstance.pauseAsync().catch((error) => {
            console.error('Error pausing sound:', error);
          });
        } else {
          state.soundInstance.playAsync().catch((error) => {
            console.error('Error playing sound:', error);
          });
        }
      }
      state.isPlaying = !state.isPlaying;
    },
    stopPlaying: (state) => {
      if (state.soundInstance) {
        state.soundInstance.stopAsync().catch((error) => {
          console.error('Error stopping sound:', error);
        });
      }
      state.isPlaying = false;
      state.nowPlaying = null;
      state.soundInstance = null;
      state.playbackPosition = 0; // Reset position when stopped
      state.playbackDuration = 0; // Reset duration when stopped
    },
    setSoundInstance: (state, action) => {
      if (state.soundInstance) {
        state.soundInstance.unloadAsync().catch((error) => {
          console.error('Error unloading sound:', error);
        });
      }
      state.soundInstance = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
      if (state.soundInstance) {
        if (action.payload) {
          state.soundInstance.playAsync().catch((error) => {
            console.error('Error playing sound:', error);
          });
        } else {
          state.soundInstance.pauseAsync().catch((error) => {
            console.error('Error pausing sound:', error);
          });
        }
      }
    },
    updatePlaybackStatus: (state, action) => {
      const { positionMillis, durationMillis } = action.payload;
      state.playbackPosition = positionMillis;
      state.playbackDuration = durationMillis;
    },
  },
});

export const {
  setNowPlaying,
  togglePlayPause,
  stopPlaying,
  setSoundInstance,
  setIsPlaying,
  updatePlaybackStatus,
} = musicSlice.actions;

export default musicSlice.reducer;

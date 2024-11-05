import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nowPlaying: null,
  isPlaying: false,
  soundInstance: null,
};

const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
      state.isPlaying = true;
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
  },
});

export const { setNowPlaying, togglePlayPause, stopPlaying, setSoundInstance, setIsPlaying } = musicSlice.actions;

export default musicSlice.reducer;

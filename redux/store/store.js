import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import musicReducer from '../slices/musicSlice';

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // Tắt kiểm tra trạng thái có thể tuần tự
    }),
});

export default store;

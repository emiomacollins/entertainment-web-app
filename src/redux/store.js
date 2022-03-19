import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import moviesReducer from './movies/moviesSlice';
import userReducer from './user/userSlice';

const persistConfig = {
	key: 'root',
	whitelist: ['movies'],
	storage,
};

const combinedReducers = combineReducers({
	user: userReducer,
	movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({ serializableCheck: false });
	},
});

export const persistor = persistStore(store);

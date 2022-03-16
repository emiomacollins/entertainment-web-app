import { createSelector, createSlice } from '@reduxjs/toolkit';
import { movies } from '../../data';

const initialState = {
	movies,
};

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		toggleBookmark(state, { payload: title }) {
			state.movies = state.movies.map((movie) => {
				if (movie.title === title)
					return { ...movie, isBookmarked: !movie.isBookmarked };
				return movie;
			});
		},
	},
});

export const { toggleBookmark } = moviesSlice.actions;

const moviesReducer = moviesSlice.reducer;
export default moviesReducer;

const getState = (store) => store.movies;
export const getMovies = createSelector(getState, ({ movies }) => movies);

import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/Cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';
import { getMovies } from '../../redux/movies/moviesSlice';

function Bookmarks() {
	const movies = useSelector(getMovies);
	return (
		<MovieGrid>
			{movies
				.filter(({ isBookmarked }) => isBookmarked)
				.map((movie, i) => (
					<MovieCard key={movie.title + i} movie={movie} />
				))}
		</MovieGrid>
	);
}

export default Bookmarks;

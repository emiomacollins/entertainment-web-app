import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/Cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';
import { getMovies } from '../../redux/movies/moviesSlice';

function TvShows() {
	const movies = useSelector(getMovies);
	return (
		<MovieGrid>
			{movies
				.filter(({ category }) => category === 'TV Series')
				.map((movie, i) => (
					<MovieCard key={movie.title + i} movie={movie} />
				))}
		</MovieGrid>
	);
}

export default TvShows;

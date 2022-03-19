import React from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '../../api/api';
import MovieCard from '../../components/cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';

function Movies() {
	const { data: movies } = useQuery('getMovies', getMovies);

	return movies ? (
		<MovieGrid>
			{movies
				.filter(({ category }) => category === 'Movie')
				.map((movie, i) => (
					<MovieCard key={movie.title + i} movie={movie} />
				))}
		</MovieGrid>
	) : (
		<h2>Loading...</h2>
	);
}

export default Movies;

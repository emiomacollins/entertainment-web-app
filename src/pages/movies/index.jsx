import React from 'react';
import styled from 'styled-components';
import MovieCard from '../../components/cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';
import { useMovies } from '../../hooks/useMovies/useMovies';

function Movies() {
	const { data: movies } = useMovies();

	return (
		<Container>
			<h2>Movies</h2>
			{movies ? (
				<MovieGrid>
					{movies
						.filter(({ category }) => category === 'Movie')
						.map((movie, i) => (
							<MovieCard key={movie.title + i} movie={movie} />
						))}
				</MovieGrid>
			) : (
				<h2>Loading...</h2>
			)}
		</Container>
	);
}

export default Movies;

const Container = styled.div`
	display: grid;
	gap: 2rem;
`;

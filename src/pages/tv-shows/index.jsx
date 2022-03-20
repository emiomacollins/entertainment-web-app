import React from 'react';
import styled from 'styled-components';
import MovieCard from '../../components/cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';
import { useMovies } from '../../hooks/useMovies/useMovies';

function TvShows() {
	const { data: movies } = useMovies();

	return (
		<Container>
			<h2>Tv Shows</h2>
			{movies ? (
				<MovieGrid>
					{movies
						.filter(({ category }) => category === 'TV Series')
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

export default TvShows;

const Container = styled.div`
	display: grid;
	gap: 2rem;
`;

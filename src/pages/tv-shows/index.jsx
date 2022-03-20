import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getMovies } from '../../api/api';
import MovieCard from '../../components/cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';

function TvShows() {
	const { data: movies } = useQuery('getMovies', getMovies);

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

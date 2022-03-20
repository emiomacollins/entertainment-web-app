import React from 'react';
import styled from 'styled-components';
import MovieCard from '../../components/cards/MovieCard';
import TrendingCard from '../../components/cards/TrendingCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';
import { useMovies } from '../../hooks/useMovies/useMovies';

function Home() {
	const { data: movies } = useMovies();

	return movies ? (
		<Container>
			<h2>Trending</h2>
			<TrendingGrid>
				{movies
					.filter(({ isTrending }) => isTrending)
					.map((movie) => (
						<TrendingCard key={movie.id} movie={movie} />
					))}
			</TrendingGrid>

			<h2>Recommended for you</h2>
			<MovieGrid>
				{movies
					.filter(({ category }) => category === 'Movie')
					.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
			</MovieGrid>
		</Container>
	) : (
		<h2>Loading...</h2>
	);
}

export default Home;

const Container = styled.div`
	display: grid;
	gap: 2rem;
`;

const TrendingGrid = styled.div`
	width: 100%;
	overflow-x: auto;
	display: flex;
	gap: 2rem;
	margin-bottom: 1rem;

	&::-webkit-scrollbar {
		display: none;
	}
`;

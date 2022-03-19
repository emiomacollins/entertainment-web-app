import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MovieCard from '../../components/Cards/MovieCard';
import TrendingCard from '../../components/Cards/TrendingCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';
import { getMovies } from '../../redux/movies/moviesSlice';

function Home() {
	const movies = useSelector(getMovies);
	return (
		<Container>
			<h2>Trending</h2>
			<TrendingGrid>
				{movies
					.filter(({ isTrending }) => isTrending)
					.map((movie, i) => (
						<TrendingCard key={movie.title + i} movie={movie} />
					))}
			</TrendingGrid>

			<h2>Recommended for you</h2>
			<MovieGrid>
				{movies
					.filter(({ category }) => category === 'Movie')
					.map((movie, i) => (
						<MovieCard key={movie.title + i} movie={movie} />
					))}
			</MovieGrid>
		</Container>
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

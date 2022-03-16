import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import MovieCard from '../../components/Cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';
import { getMovies } from '../../redux/movies/moviesSlice';

function SearchResults() {
	const [search] = useSearchParams();
	const query = search.get('query');
	const movies = useSelector(getMovies);

	const results = useMemo(
		() =>
			movies.filter(({ title }) => {
				return (
					title.toLowerCase().includes(query.toLowerCase()) ||
					query.toLowerCase().includes(title.toLowerCase())
				);
			}),
		[movies, query]
	);

	return (
		<Container>
			<Heading>
				Found {results.length} results for '{query}'
			</Heading>
			<MovieGrid>
				{results.map((movie, i) => (
					<MovieCard key={movie.title + i} movie={movie} />
				))}
			</MovieGrid>
		</Container>
	);
}

export default SearchResults;

const Container = styled.div`
	display: grid;
	gap: 2rem;
`;

const Heading = styled.h2`
	font-weight: 300;
`;

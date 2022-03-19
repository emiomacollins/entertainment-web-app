import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import MovieCard from '../../components/cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';

function Render({ movies }) {
	const [search] = useSearchParams();
	const query = search.get('query');

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
			<h2>
				Found {results.length} results for '{query}'
			</h2>
			<MovieGrid>
				{results.map((movie, i) => (
					<MovieCard key={movie.title + i} movie={movie} />
				))}
			</MovieGrid>
		</Container>
	);
}

export default Render;

const Container = styled.div`
	display: grid;
	gap: 2rem;
`;

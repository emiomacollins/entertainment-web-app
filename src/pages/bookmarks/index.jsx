import React from 'react';
import styled from 'styled-components';
import MovieCard from '../../components/cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';
import { useBookmarks } from '../../hooks/useBookmark/useBookmarks';
import { useMovies } from '../../hooks/useMovies/useMovies';

function Bookmarks() {
	const { data: bookmarks } = useBookmarks();
	const { data: movies } = useMovies();

	return (
		<Container>
			<h2>Bookmarks</h2>
			{movies && bookmarks ? (
				<MovieGrid>
					{movies
						.filter(({ id }) => bookmarks[id])
						.map((movie) => (
							<MovieCard key={movie.id} movie={movie} />
						))}
				</MovieGrid>
			) : (
				<h2>Loading...</h2>
			)}
		</Container>
	);
}

export default Bookmarks;
const Container = styled.div`
	display: grid;
	gap: 2rem;
`;

import React from 'react';
import { useQuery } from 'react-query';
import { getMovies } from '../../api/api';
import MovieCard from '../../components/Cards/MovieCard';
import { MovieGrid } from '../../components/styled-components/MovieGrid';
import { useBookmarks } from '../../hooks/useBookmark/useBookmarks';

function Bookmarks() {
	const { data: bookmarks } = useBookmarks();

	const { data: movies } = useQuery('getMovies', getMovies);

	return movies ? (
		<MovieGrid>
			{movies
				.filter(({ id }) => bookmarks[id])
				.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
		</MovieGrid>
	) : (
		<h2>Loading...</h2>
	);
}

export default Bookmarks;

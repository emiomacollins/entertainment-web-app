import { useMovies } from '../../hooks/useMovies/useMovies';
import Render from './Render';

function SearchResults() {
	const { data: movies } = useMovies();
	return movies ? <Render movies={movies} /> : <h2>Searching...</h2>;
}

export default SearchResults;

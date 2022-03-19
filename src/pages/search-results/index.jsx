import { useQuery } from 'react-query';
import { getMovies } from '../../api/api';
import Render from './Render';

function SearchResults() {
	const { data } = useQuery('getMovies', getMovies, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	});
	return data ? <Render movies={data} /> : <h2>Searching...</h2>;
}

export default SearchResults;

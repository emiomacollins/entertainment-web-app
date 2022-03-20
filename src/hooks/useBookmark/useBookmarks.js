import { useQuery, useQueryClient } from 'react-query';
import { getBookmarks } from '../../pages/bookmarks/api';
import { toggleBookmark } from './api';

export function useBookmarks() {
	const queryClient = useQueryClient();

	const { data, isLoading, error } = useQuery('getBookmarks', getBookmarks, {
		refetchOnWindowFocus: false,
		//this is bad for clearing cache
		// refetchOnMount: false,
	});

	async function handleToggleBookmark(id) {
		await toggleBookmark(id);
		queryClient.invalidateQueries('getBookmarks');
	}

	return {
		data,
		isLoading,
		error,
		handleToggleBookmark,
	};
}

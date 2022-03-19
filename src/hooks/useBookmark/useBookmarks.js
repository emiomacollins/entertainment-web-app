import { useQuery, useQueryClient } from 'react-query';
import { getBookmarks } from '../../pages/bookmarks/api';
import { toggleBookmark } from './api';

export function useBookmarks() {
	const queryClient = useQueryClient();

	const { data, isLoading, error } = useQuery('getBookmarks', getBookmarks, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
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

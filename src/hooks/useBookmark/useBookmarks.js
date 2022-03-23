import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getBookmarks } from '../../pages/bookmarks/api';
import { toggleBookmark } from './api';

export function useBookmarks() {
	const queryClient = useQueryClient();

	const { data, isLoading, error } = useQuery('getBookmarks', getBookmarks, {
		refetchOnWindowFocus: false,
		//this is bad for clearing cache
		// refetchOnMount: false,
	});

	const { mutate: handleToggleBookmark } = useMutation(
		'toggleBookmark',
		async (id) => await toggleBookmark(id),
		{
			onMutate(id) {
				// optimisticaly update the bookmarks
				const prevBookmarks = queryClient.getQueriesData('getBookmarks')[0][1];
				queryClient.setQueriesData('getBookmarks', {
					...prevBookmarks,
					[id]: !prevBookmarks[id],
				});
				return { prevBookmarks };
			},
			onError(_, __, { prevBookmarks }) {
				// reverse optimistic update
				queryClient.setQueriesData('getBookmarks', {
					prevBookmarks,
				});
			},
			onSettled() {
				// sync with server regardless of the outcome
				queryClient.invalidateQueries('getBookmarks');
			},
		}
	);

	return {
		data,
		isLoading,
		error,
		handleToggleBookmark,
	};
}

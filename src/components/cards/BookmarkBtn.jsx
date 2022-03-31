import React from 'react';
import styled from 'styled-components';
import { useBookmarks } from '../../hooks/useBookmark/useBookmarks';

function BookmarkBtn({ movie }) {
	const { data: bookmarks, handleToggleBookmark } = useBookmarks();
	const isBookmarked = bookmarks ? bookmarks[movie.id] : false;

	return (
		<Container onClick={() => handleToggleBookmark(movie.id)}>
			<BookmarkIcon
				src='./assets/icon-bookmark-full.svg'
				alt=''
				visible={isBookmarked}
			/>
			<BookmarkIcon
				src='./assets/icon-bookmark-empty.svg'
				alt=''
				visible={!isBookmarked}
			/>
		</Container>
	);
}

export default BookmarkBtn;

export const Container = styled.button`
	position: absolute;
	top: 2rem;
	right: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: var(--dark-transparent);
	border: 0;
	width: 3.5rem;
	height: 3.5rem;
	transition: 0.2s;

	&:hover {
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const BookmarkIcon = styled.img`
	opacity: ${(p) => (p.visible ? '1' : '0')};
	position: ${(p) => (p.visible ? 'unset' : 'absolute')};
`;

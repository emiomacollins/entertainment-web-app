import React from 'react';
import styled from 'styled-components';
import MoviesIcon from '../../assets/custom-svgs/MoviesIcon';
import TvShowsIcon from '../../assets/custom-svgs/TvShowsIcon';
import { useBookmarks } from '../../hooks/useBookmark/useBookmarks';
import FadeInImage from '../FadeInImage';
import {
	BookmarkBtn,
	BookmarkIcon,
	Category,
	CategoryIcon,
	Dot,
	Info,
} from './SharedStyles';

function MovieCard({ movie }) {
	const {
		id,
		title,
		year,
		category,
		rating,
		thumbnail: {
			regular: { medium: image },
		},
	} = movie;

	const { data: bookmarks, handleToggleBookmark } = useBookmarks();

	const Icon = category === 'Movie' ? MoviesIcon : TvShowsIcon;

	return bookmarks ? (
		<Container>
			<ThumbnailContainer>
				<Thumbnail src={image} alt='' />
				<BookmarkBtn onClick={() => handleToggleBookmark(id)}>
					<BookmarkIcon
						src='./assets/icon-bookmark-full.svg'
						alt=''
						visible={bookmarks[id]}
					/>
					<BookmarkIcon
						src='./assets/icon-bookmark-empty.svg'
						alt=''
						visible={!bookmarks[id]}
					/>
				</BookmarkBtn>
			</ThumbnailContainer>

			<Info>
				{year}
				<Dot />
				<Category>
					<CategoryIcon as={Icon} />
					{category}
				</Category>
				<Dot />
				{rating}
			</Info>
			<Title>{title}</Title>
		</Container>
	) : null;
}

export default MovieCard;

const Container = styled.div`
	display: grid;
	gap: 1rem;
	position: relative;
	min-width: 25rem;
	min-height: 20rem;
`;

const ThumbnailContainer = styled.div`
	display: flex;
	position: relative;
`;

const Thumbnail = styled(FadeInImage)`
	border-radius: var(--radius-400);
`;

const Title = styled.h3`
	font-weight: 500;
	letter-spacing: 0.07em;
`;

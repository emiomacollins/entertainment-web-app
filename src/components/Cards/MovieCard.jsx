import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import MoviesIcon from '../../assets/custom-svgs/MoviesIcon';
import TvShowsIcon from '../../assets/custom-svgs/TvShowsIcon';
import { toggleBookmark } from '../../redux/movies/moviesSlice';
import {
	BookmarkBtn,
	BookmarkIcon,
	Category,
	CategoryIcon,
	Dot,
	Info,
} from './SharedStyles';

function MovieCard({ movie }) {
	const dispatch = useDispatch();
	const {
		title,
		year,
		category,
		rating,
		isBookmarked,
		thumbnail: {
			regular: { medium: image },
		},
	} = movie;

	const Icon = category === 'Movie' ? MoviesIcon : TvShowsIcon;

	function handleToggleBookmark() {
		dispatch(toggleBookmark(title));
	}

	return (
		<Container>
			<ThumbnailContainer>
				<Thumbnail src={image} alt='' />
				<BookmarkBtn onClick={handleToggleBookmark}>
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
	);
}

export default MovieCard;

const Container = styled.div`
	display: grid;
	gap: 1rem;
	position: relative;
`;

const ThumbnailContainer = styled.div`
	display: flex;
	position: relative;
`;

const Thumbnail = styled.img`
	border-radius: var(--radius-400);
`;

const Title = styled.h3`
	font-weight: 500;
	letter-spacing: 0.07em;
`;

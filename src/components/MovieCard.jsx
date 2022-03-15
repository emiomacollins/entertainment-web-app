import React from 'react';
import styled from 'styled-components';
import MoviesIcon from '../assets/custom-svgs/MoviesIcon';
import TvShowsIcon from '../assets/custom-svgs/TvShowsIcon';

function MovieCard({ movie }) {
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

	return (
		<Container>
			<ThumbnailContainer>
				<Thumbnail src={image} alt='' />
				<BookmarkBtn>
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
					<StyledIcon as={Icon} />
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
	cursor: pointer;
	position: relative;
`;

const ThumbnailContainer = styled.div`
	display: flex;
	position: relative;
`;

const BookmarkBtn = styled.button`
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
`;

const BookmarkIcon = styled.img`
	opacity: ${(p) => (p.visible ? '1' : '0')};
	position: ${(p) => (p.visible ? 'unset' : 'absolute')};
`;

const Thumbnail = styled.img`
	border-radius: var(--radius-400);
`;

const Title = styled.h3`
	font-weight: 500;
	letter-spacing: 0.07em;
`;

const Info = styled.div`
	opacity: 0.5;
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

const Dot = styled.span`
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	background: var(--light);
`;

const Category = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	svg {
		transform: scale(0.8);
	}
`;

const StyledIcon = styled.div`
	fill: var(--light);
	height: auto.1rem;
`;

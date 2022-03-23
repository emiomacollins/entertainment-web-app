import React from 'react';
import styled from 'styled-components';
import MoviesIcon from '../../assets/custom-svgs/MoviesIcon';
import TvShowsIcon from '../../assets/custom-svgs/TvShowsIcon';
import FadeInImage from '../FadeInImage';
import BookmarkBtn from './BookmarkBtn';
import { Category, CategoryIcon, Dot, Info } from './SharedStyles';

function MovieCard({ movie }) {
	const {
		title,
		year,
		category,
		rating,
		thumbnail: {
			regular: { medium: image },
		},
	} = movie;
	const Icon = category === 'Movie' ? MoviesIcon : TvShowsIcon;

	return (
		<Container>
			<ThumbnailContainer>
				<Thumbnail src={image} alt='' />
				<BookmarkBtn movie={movie} />
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

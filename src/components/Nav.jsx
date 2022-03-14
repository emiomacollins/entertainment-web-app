import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BookmarkIcon from '../assets/custom-svgs/BookmarkIcon';
import HomeIcon from '../assets/custom-svgs/HomeIcon';
import MoviesIcon from '../assets/custom-svgs/MoviesIcon';
import TvShowsIcon from '../assets/custom-svgs/TvShowsIcon';
import { desktop, tablet } from '../constants/mediaQueries';
import { routes } from '../constants/routes';

function Nav() {
	return (
		<Container>
			<LogoLink as={Link} to={routes.home}>
				<Logo src='./assets/logo.svg' alt='' />
			</LogoLink>

			<Links>
				<StyledLink as={Link} to={routes.home}>
					<Icon as={HomeIcon} />
				</StyledLink>
				<StyledLink as={Link} to={routes.movies}>
					<Icon as={MoviesIcon} />
				</StyledLink>
				<StyledLink as={Link} to={routes.tvShows}>
					<Icon as={TvShowsIcon} />
				</StyledLink>
				<StyledLink as={Link} to={routes.bookmarks}>
					<Icon as={BookmarkIcon} />
				</StyledLink>
			</Links>

			<ProfilePic src='./assets/image-avatar.png' alt='' />
		</Container>
	);
}

export default Nav;

const Container = styled.div`
	background: var(--blue-dark);
	display: grid;
	grid-template-columns: auto 1fr auto;
	gap: 2rem;
	align-items: center;
	justify-items: center;
	padding: 0 2rem;

	@media (min-width: ${tablet}) {
		margin: 2.5rem;
		border-radius: var(--radius-400);
	}

	@media (min-width: ${desktop}) {
		grid-template-columns: unset;
		grid-template-rows: auto 1fr auto;
		gap: 5rem;
		margin-right: 0;
		padding: 4rem 0;
		border-radius: var(--radius-500);
	}
`;

const Logo = styled.img`
	height: 3rem;
`;

const Links = styled.div`
	display: flex;
	justify-content: center;

	@media (min-width: ${desktop}) {
		flex-direction: column;
		justify-content: flex-start;
		align-self: start;
	}
`;

const Icon = styled.img`
	transition: 0.2s;
`;

const StyledLink = styled.a`
	display: flex;
	padding-block: 3rem;
	padding-inline: 1rem;

	&:hover ${Icon} {
		fill: var(--light);
	}

	@media (min-width: ${tablet}) {
		padding-inline: 1.5rem;
	}

	@media (min-width: ${desktop}) {
		padding-inline: 3.5rem;
		padding-block: 2rem;
	}
`;

const LogoLink = styled.a`
	display: flex;
`;

const ProfilePic = styled.img`
	height: 4rem;
	border: 2px solid var(--light);
	border-radius: 50%;
`;

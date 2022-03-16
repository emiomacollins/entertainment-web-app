import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import BookmarkIcon from '../assets/custom-svgs/BookmarkIcon';
import HomeIcon from '../assets/custom-svgs/HomeIcon';
import MoviesIcon from '../assets/custom-svgs/MoviesIcon';
import TvShowsIcon from '../assets/custom-svgs/TvShowsIcon';
import { desktop, tablet } from '../constants/mediaQueries';
import { routes } from '../constants/routes';

function Nav() {
	const { pathname } = useLocation();
	const links = [
		{ route: routes.home, icon: HomeIcon },
		{ route: routes.movies, icon: MoviesIcon },
		{ route: routes.tvShows, icon: TvShowsIcon },
		{ route: routes.bookmarks, icon: BookmarkIcon },
	];

	return (
		<Container>
			<LogoLink as={Link} to={routes.home}>
				<Logo src='./assets/logo.svg' alt='' />
			</LogoLink>

			<Links>
				{links.map(({ route, icon }) => (
					<StyledLink
						as={Link}
						to={route}
						active={pathname === route ? 'true' : ''}
						key={route}
					>
						<Icon as={icon} />
					</StyledLink>
				))}
			</Links>

			{/* TODO: add sign out  */}
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
		margin: var(--layout-gap) var(--layout-gap) 0 var(--layout-gap);
		border-radius: var(--radius-400);
	}

	@media (min-width: ${desktop}) {
		grid-template-columns: unset;
		grid-template-rows: auto 1fr auto;
		gap: 5rem;
		margin: var(--layout-gap) 0 var(--layout-gap) var(--layout-gap);
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

	&:focus {
		outline: 0;

		${Icon} {
			fill: var(--light);
		}
	}

	${(p) =>
		p.active &&
		css`
			${Icon} {
				fill: var(--light);
			}
		`}

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

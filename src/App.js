/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/nav/Nav';
import SearchBox from './components/SearchBox';
import { desktop } from './constants/mediaQueries';
import { routes } from './constants/routes';
import { auth } from './firebase/init';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import Bookmarks from './pages/bookmarks';
import Home from './pages/home';
import Movies from './pages/movies';
import SearchResults from './pages/search-results';
import TvShows from './pages/tv-shows';
import { getUser, setUser } from './redux/user/userSlice';

function App() {
	const dispatch = useDispatch();
	const user = useSelector(getUser);
	const [authInitialized, setAuthInitialized] = useState(false);

	useEffect(() => {
		const unsuscribe = onAuthStateChanged(auth, (user) => {
			dispatch(setUser(user ? { uid: user.uid } : user));
			setAuthInitialized(true);
		});
		return unsuscribe;
	}, []);

	// TODO: add click away minimize functionality to popups

	// dont render entrie app till firebase has initialized auth
	// to avoid redirecting to login page even when user exists
	return authInitialized ? (
		<Routes>
			<Route path={routes.login} element={<Login />} />
			<Route path={routes.signUp} element={<SignUp />} />
			<Route
				path='*'
				// return a redirect to login page if user is null
				element={
					user ? (
						<Layout>
							<Nav />
							<RoutesContainer>
								<SearchBox />
								<Routes>
									<Route
										path={routes.search}
										element={<SearchResults />}
									/>
									<Route path={routes.home} element={<Home />} />
									<Route path={routes.movies} element={<Movies />} />
									<Route path={routes.tvShows} element={<TvShows />} />
									<Route
										path={routes.bookmarks}
										element={<Bookmarks />}
									/>
								</Routes>
							</RoutesContainer>
						</Layout>
					) : (
						<Navigate to={routes.login} />
					)
				}
			/>
		</Routes>
	) : null;
}

export default App;

const Layout = styled.div`
	display: grid;

	@media (min-width: ${desktop}) {
		height: 100vh;
		grid-template-columns: auto 1fr;
	}
`;

const RoutesContainer = styled.div`
	padding-inline: var(--layout-gap);
	padding-bottom: var(--layout-gap);
	display: grid;
	align-content: flex-start;
	height: 100%;
	overflow-y: auto;

	@media (min-width: ${desktop}) {
		padding-inline: var(--layout-gap) 4rem;
		padding-top: var(--layout-gap);
	}
`;

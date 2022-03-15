/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';
import { desktop } from './constants/mediaQueries';
import { routes } from './constants/routes';
import { auth } from './firebase/init';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import Home from './pages/home';
import SearchResults from './pages/search-results';
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
	padding-inline: var(--layout-gap) 4rem;
	padding-bottom: var(--layout-gap);
	display: grid;
	align-content: flex-start;
	height: 100%;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.8rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgba(225, 225, 225, 0.5);
	}

	@media (min-width: ${desktop}) {
		padding-top: var(--layout-gap);
	}
`;

/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import { desktop } from './constants/mediaQueries';
import { routes } from './constants/routes';
import { auth } from './firebase/init';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import Home from './pages/home';
import { getUser, setUser } from './redux/user/userSlice';

function App() {
	const dispatch = useDispatch();
	const [authInitialized, setAuthInitialized] = useState(false);

	useEffect(() => {
		const unsuscribe = onAuthStateChanged(auth, (user) => {
			dispatch(setUser(user ? { uid: user.uid } : null));
			setAuthInitialized(true);
		});
		return unsuscribe;
	}, []);

	const user = useSelector(getUser);

	return authInitialized ? (
		<Routes>
			<Route path={routes.login} element={<Login />} />
			<Route path={routes.signUp} element={<SignUp />} />
			<Route
				path='*'
				element={
					user ? (
						<Layout>
							<Nav />
							<RoutesContainer>
								<Routes>
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
		min-height: 100vh;
		grid-template-columns: auto 1fr;
	}
`;

const RoutesContainer = styled.div`
	padding: 0 2.5rem;
	@media (min-width: ${desktop}) {
		margin-top: 2.5rem;
	}
`;

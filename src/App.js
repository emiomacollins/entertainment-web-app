/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import { desktop } from './constants/mediaQueries';
import { routes } from './constants/routes';
import { auth } from './firebase/init';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import Home from './pages/home';
import { setUser } from './redux/user/userSlice';

function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [authInitialized, setAuthInitialized] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// add serializable properties only
				const { uid, providerData: otherProps } = user;
				dispatch(setUser({ uid, ...otherProps[0] }));
			} else {
				dispatch(setUser(null));
				navigate(routes.login);
			}
			setAuthInitialized(true);
		});
	}, []);

	return authInitialized ? (
		<Routes>
			<Route path={routes.login} element={<Login />} />
			<Route path={routes.signUp} element={<SignUp />} />
			<Route
				path='*'
				element={
					<Layout>
						<Nav />
						<Routes>
							<Route path={routes.home} element={<Home />} />
						</Routes>
					</Layout>
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

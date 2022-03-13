import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from './constants/routes';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import { getUser } from './redux/user/userSlice';

function App() {
	const user = useSelector(getUser);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) navigate(routes.login);
	}, [navigate, user]);

	return (
		<Routes>
			<Route path={routes.login} element={<Login />} />
			<Route path={routes.signUp} element={<SignUp />} />
			<Route path="*" element={<Layout></Layout>} />
		</Routes>
	);
}

export default App;

const Layout = styled.div``;

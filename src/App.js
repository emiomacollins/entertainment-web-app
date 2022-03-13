import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styledComponents from 'styled-components';
import { routes } from './constants/routes';
import Login from './pages/login';
import SignUp from './pages/signup';

function App() {
	return (
		<Routes>
			<Route path={routes.login} element={<Login />} />
			<Route path={routes.signUp} element={<SignUp />} />
			<Route path="*" element={<Layout></Layout>} />
		</Routes>
	);
}

export default App;

const Layout = styledComponents.div`
    
`;

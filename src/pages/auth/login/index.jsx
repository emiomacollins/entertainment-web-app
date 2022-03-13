import React from 'react';
import { Textbox } from '../../../components/styled-components/form-elements/Textbox';
import { Link } from '../../../components/styled-components/Link';
import { routes } from '../../../constants/routes';
import {
	Center,
	Container,
	Fields,
	Form,
	Heading,
	Logo,
	LogoContainer,
	Submit,
} from '../SharedStyles';

function Login() {
	return (
		<Container>
			<LogoContainer>
				<Logo src="./assets/logo.svg" alt="Logo" />
			</LogoContainer>

			<Form>
				<Heading>Login</Heading>

				<Fields>
					<Textbox placeholder="Email" type="email" />
					<Textbox placeholder="Password" type="password" />
				</Fields>

				<Submit>Login to your account</Submit>

				<Center>
					Don’t have an account? <Link href={routes.signUp}>Sign Up</Link>
				</Center>
			</Form>
		</Container>
	);
}

export default Login;

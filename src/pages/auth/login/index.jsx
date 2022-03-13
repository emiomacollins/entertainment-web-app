import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import Textbox from '../../../components/formik-components/Textbox';
import { Link } from '../../../components/styled-components/Link';
import { routes } from '../../../constants/routes';
import {
	Center,
	Container,
	Fields,
	Form as StyledForm,
	Heading,
	Logo,
	LogoContainer,
	Submit,
} from '../SharedStyles';

function Login() {
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={yup.object({
				email: yup.string().email('Invalid Email').required('Required'),
				password: yup.string().required('Required'),
			})}
			onSubmit={() => {}}
		>
			<Container>
				<LogoContainer>
					<Logo src="./assets/logo.svg" alt="Logo" />
				</LogoContainer>

				<StyledForm as={Form}>
					<Heading>Login</Heading>

					<Fields>
						<Textbox placeholder="Email" type="email" name="email" />
						<Textbox placeholder="Password" type="password" name="password" />
					</Fields>

					<Submit>Login to your account</Submit>

					<Center>
						Don’t have an account? <Link href={routes.signUp}>Sign Up</Link>
					</Center>
				</StyledForm>
			</Container>
		</Formik>
	);
}

export default Login;

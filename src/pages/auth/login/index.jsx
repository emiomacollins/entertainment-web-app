import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Textbox from '../../../components/formik-components/Textbox';
import { Error } from '../../../components/styled-components/Error';
import { Link as StyledLink } from '../../../components/styled-components/Link';
import { routes } from '../../../constants/routes';
import { auth, signInWithEmail } from '../../../firebase/init';
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
	const navigate = useNavigate();

	useEffect(() => {
		auth.signOut();
	}, []);

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				error: '',
			}}
			validationSchema={yup.object({
				email: yup.string().email('Invalid Email').required("Can't be empty"),
				password: yup.string().required("Can't be empty"),
			})}
			onSubmit={async (values, actions) => {
				const { email, password } = values;
				try {
					actions.setFieldValue('error', '');
					await signInWithEmail(email, password);
					navigate(routes.home);
				} catch (error) {
					actions.setFieldValue('error', error.message);
				}
			}}
		>
			{(formik) => (
				<Container>
					<LogoContainer>
						<Logo src="./assets/logo.svg" alt="Logo" />
					</LogoContainer>

					<StyledForm as={Form}>
						<Heading>Login</Heading>

						<Fields>
							<Textbox placeholder="Email" type="email" name="email" />
							<Textbox
								placeholder="Password"
								type="password"
								name="password"
							/>
							{formik.values.error && <Error>{formik.values.error}</Error>}
						</Fields>

						<Submit disabled={formik.isSubmitting} type="submit">
							Login to your account
						</Submit>

						<Center>
							Don’t have an account?{' '}
							<StyledLink as={Link} to={routes.signUp}>
								Sign Up
							</StyledLink>
						</Center>
					</StyledForm>
				</Container>
			)}
		</Formik>
	);
}

export default Login;

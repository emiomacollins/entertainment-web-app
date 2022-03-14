import { Form, Formik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Textbox from '../../../components/formik-components/Textbox';
import { Error } from '../../../components/styled-components/Error';
import { Link as StyledLink } from '../../../components/styled-components/Link';
import { routes } from '../../../constants/routes';
import { signUpWithEmail } from '../../../firebase/init';
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

function SignUp() {
	const navigate = useNavigate();

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				confirmPassword: '',
				error: '',
			}}
			validationSchema={yup.object({
				email: yup.string().email('Invalid Email').required("Can't be empty"),
				password: yup.string().required("Can't be empty"),
				confirmPassword: yup
					.string()
					.oneOf([yup.ref('password')], "Passwords don't match")
					.required("Can't be empty"),
			})}
			onSubmit={async (values, actions) => {
				const { email, password } = values;
				try {
					await signUpWithEmail(email, password);
					navigate(routes.home);
				} catch (error) {
					actions.setFieldValue('error', error.message);
				}
			}}
		>
			{(formik) => (
				<Container>
					<LogoContainer as={Link} to={routes.home}>
						<Logo src='./assets/logo.svg' alt='Logo' />
					</LogoContainer>

					<StyledForm as={Form}>
						<Heading>Sign Up</Heading>

						<Fields>
							<Textbox placeholder='Email' type='email' name='email' />
							<Textbox
								placeholder='Password'
								type='password'
								name='password'
							/>
							<Textbox
								placeholder='Repeat Password'
								type='password'
								name='confirmPassword'
							/>
							{formik.values.error && <Error>{formik.values.error}</Error>}
						</Fields>

						<Submit disabled={formik.isSubmitting} type='submit'>
							Create an account
						</Submit>

						<Center>
							Already have an account?{' '}
							<StyledLink as={Link} to={routes.login}>
								Login
							</StyledLink>
						</Center>
					</StyledForm>
				</Container>
			)}
		</Formik>
	);
}

export default SignUp;

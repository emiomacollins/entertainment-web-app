import styled from 'styled-components';
import { Button } from '../../components/styled-components/Button';

export const Container = styled.div`
	display: grid;
	gap: 6rem;
	margin: 5rem auto;
	width: 90%;
	max-width: 350px;
`;

export const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const Logo = styled.img`
	height: 3rem;
`;

export const Form = styled.form`
	padding: 3.5rem 2.5rem;
	background: var(--blue-dark);
	border-radius: var(--radius);
	display: grid;
`;

export const Heading = styled.h1`
	font-weight: 300;
	margin-bottom: 3rem;
`;

export const Fields = styled.div`
	display: grid;
	gap: 1rem;
`;

export const Center = styled.p`
	text-align: center;
`;

export const Submit = styled(Button)`
	margin-block: 4rem 3rem;
`;

import styled from 'styled-components';

export const Button = styled.button`
	padding: 2rem;
	border: 0;
	border-radius: var(--radius-300);
	background: var(--red);
	color: var(--light);
	transition: 0.2s;

	&:hover {
		background: var(--light);
		color: var(--dark);
	}

	&:disabled {
		opacity: 0.5;
	}
`;

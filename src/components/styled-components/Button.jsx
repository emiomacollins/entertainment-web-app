import styled from 'styled-components';

export const Button = styled.button`
	padding: 2rem;
	border: 0;
	border-radius: var(--radius-300);
	background: var(--red);
	color: var(--light);
	transition: background 0.2s;

	&:hover {
		background: var(--red-dark);
	}
`;

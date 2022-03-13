import styled from 'styled-components';

export const Link = styled.a`
	color: var(--red);
	text-decoration: none;

	&:hover {
		text-decoration: underline;
		color: var(--red-dark);
	}
`;

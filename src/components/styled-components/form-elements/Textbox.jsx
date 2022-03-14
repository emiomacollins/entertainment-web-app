import styled from 'styled-components';

export const Textbox = styled.input`
	padding: 1.8rem 1rem;
	background: transparent;
	border: 0;
	border-bottom: 1.5px solid var(--blue);
	outline: 0;
	transition: border-color 0.3s;

	&::placeholder {
		opacity: 0.5;
		color: var(--light);
	}

	&:focus {
		border-color: var(--light);
	}

	${(p) =>
		p.error &&
		` 
        border-color: var(--red); `}
`;

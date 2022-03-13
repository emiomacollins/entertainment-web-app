import styled from 'styled-components';

export const Textbox = styled.input`
	padding: 1.8rem 1rem;
	background: transparent;
	color: var(--light);
	border: 0;
	border-bottom: 1.5px solid var(--blue);
	outline: 0;
	transition: border-color 0.3s;
	caret-color: var(--red);

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

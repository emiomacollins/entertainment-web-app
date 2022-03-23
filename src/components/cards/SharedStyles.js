import styled from 'styled-components';

export const Info = styled.div`
	opacity: 0.5;
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

export const Dot = styled.span`
	width: 0.5rem;
	height: 0.5rem;
	border-radius: 50%;
	background: var(--light);
`;

export const Category = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	svg {
		transform: scale(0.8);
	}
`;

export const CategoryIcon = styled.div`
	fill: var(--light);
	height: auto.1rem;
`;

import styled from 'styled-components';

export const BookmarkBtn = styled.button`
	position: absolute;
	top: 2rem;
	right: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: var(--dark-transparent);
	border: 0;
	width: 3.5rem;
	height: 3.5rem;
	transition: all.2s;

	&:hover {
		transform: scale(1.1);
	}
`;

export const BookmarkIcon = styled.img`
	opacity: ${(p) => (p.visible ? '1' : '0')};
	position: ${(p) => (p.visible ? 'unset' : 'absolute')};
`;

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

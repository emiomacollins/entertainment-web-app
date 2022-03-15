import styled from 'styled-components';

export const MovieGrid = styled.div`
	display: grid;
	gap: 3rem;
	justify-items: center;
	grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
`;

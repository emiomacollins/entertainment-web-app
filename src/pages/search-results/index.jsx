import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

function SearchResults() {
	const [search] = useSearchParams();

	return (
		<Container>
			<Heading>
				Found {0} results for '{search.get('query')}'
			</Heading>
		</Container>
	);
}

export default SearchResults;

const Container = styled.div``;

const Heading = styled.h1`
	font-weight: 300;
`;

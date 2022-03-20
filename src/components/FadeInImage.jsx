import React, { useState } from 'react';
import styled from 'styled-components';

function FadeInImage(props) {
	const [loaded, setLoaded] = useState(false);

	function handleLoad() {
		setLoaded(true);
	}

	return <Container loaded={loaded} onLoad={handleLoad} {...props} />;
}

export default FadeInImage;

const Container = styled.img`
	transition: 0.3s;
	opacity: ${(p) => (p.loaded ? '1' : '0')};
`;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../constants/routes';

function SearchBox() {
	const navigate = useNavigate();
	const [query, setQuery] = useState('');

	function handleChange(e) {
		setQuery(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		navigate(`${routes.search}?query=${query}`);
	}

	return (
		<Container onSubmit={handleSubmit}>
			<Icon src='./assets/icon-search.svg' alt='' />
			<Input
				type='text'
				placeholder='Search for movies or TV series'
				value={query}
				onChange={handleChange}
			/>
		</Container>
	);
}

export default SearchBox;

const Container = styled.form`
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	gap: 2rem;
	margin-block: var(--layout-gap);
`;

const Icon = styled.img`
	height: 3rem;
`;

const Input = styled.input`
	padding-block: 1.5rem;
	background: transparent;
	border: 0;
	border-bottom: 1px solid transparent;
	font-size: var(--size-600);
	outline: 0;

	transition: 0.05s;

	&:focus {
		border-bottom: 1px solid var(--blue);
	}
`;

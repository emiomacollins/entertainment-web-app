import { useField } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { Error } from '../styled-components/Error';
import { Textbox as TextboxEl } from '../styled-components/form-elements/Textbox';

function Textbox(props) {
	const [fields, meta] = useField(props);
	const error = meta.touched && meta.error;

	return (
		<Container>
			<TextboxEl {...fields} {...props} error={error} />
			{error && <StyledError>{meta.error}</StyledError>}
		</Container>
	);
}

export default Textbox;

const Container = styled.div`
	display: grid;
	position: relative;
`;

const StyledError = styled(Error)`
	position: absolute;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
`;

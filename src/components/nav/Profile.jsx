import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import styled from 'styled-components';
import { auth } from '../../firebase/init';

function Profile() {
	const [expanded, setExpanded] = useState(false);

	function handleToggleExpanded() {
		setExpanded(!expanded);
	}

	async function handleSignOut() {
		signOut(auth);
	}

	return (
		<Container>
			<Button onClick={handleToggleExpanded}>
				<ProfilePic src='./assets/image-avatar.png' alt='' />
			</Button>
			<Options expanded={expanded}>
				<SignOut onClick={handleSignOut}>Sign Out</SignOut>
			</Options>
		</Container>
	);
}

export default Profile;

const Container = styled.div`
	display: grid;
	position: relative;
`;

const ProfilePic = styled.img`
	height: 4rem;
	border: 2px solid var(--light);
	border-radius: 50%;
`;

const Button = styled.button`
	background: transparent;
	border: 0;
`;

const Options = styled.div`
	display: grid;
	padding: 2rem;
	background: var(--blue);
	position: absolute;
	bottom: 0;
	left: calc(100% + 2rem);
	border-radius: var(--radius-400);
	z-index: 2;
	opacity: ${(p) => (p.expanded ? '1' : '0')};
	transition: 0.1s;
	min-width: max-content;
`;

const SignOut = styled(Button)`
	transition: all.1s;
	&:hover {
		opacity: 0.8;
	}
`;

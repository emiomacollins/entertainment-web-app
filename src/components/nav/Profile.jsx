import { signOut } from 'firebase/auth';
import React from 'react';
import styled from 'styled-components';
import { desktop } from '../../constants/mediaQueries';
import { auth } from '../../firebase/init';
import { useDropdown } from '../../hooks/useDropdown';

function Profile() {
	const { ref, expanded, handleToggleExpanded } = useDropdown();

	async function handleSignOut() {
		signOut(auth);
	}

	return (
		<Container ref={ref}>
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
	top: calc(100% + 1rem);
	right: 0;
	border-radius: var(--radius-400);
	z-index: 2;
	opacity: ${(p) => (p.expanded ? '1' : '0')};
	transition: 0.1s;
	min-width: max-content;

	@media (min-width: ${desktop}) {
		top: unset;
		bottom: 0;
		left: calc(100% + 2rem);
	}
`;

const SignOut = styled(Button)`
	transition: all.1s;
	&:hover {
		opacity: 0.8;
	}
`;

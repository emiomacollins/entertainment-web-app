import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/init';

export async function getBookmarks() {
	const snapshot = await getDoc(doc(db, `bookmarks/${auth.currentUser.uid}`));
	return snapshot.data() || {};
}

export function getBookmarkedMovies() {}

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/init';

export async function getBookmarks() {
	const snapshot = await getDoc(doc(db, `bookmarks/${auth.currentUser.uid}`));
	return snapshot.data() || {};
}

export async function toggleBookmark(id) {
	const ref = doc(db, `bookmarks/${auth.currentUser.uid}`);
	const snapshot = await getDoc(ref);
	const bookmarks = snapshot.data() || {};
	await setDoc(ref, { ...bookmarks, [id]: !bookmarks[id] });
}

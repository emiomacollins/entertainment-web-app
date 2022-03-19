import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/init';

export async function getMovies() {
	const ref = collection(db, 'movies');
	const snapshot = await getDocs(ref);
	return snapshot.docs.map((doc) => doc.data());
}

import { addDoc, collection } from 'firebase/firestore';
import { db } from './init';

export function exportMovies(movies) {
	movies.forEach((movie) => {
		addDoc(collection(db, 'movies'), movie);
	});
}

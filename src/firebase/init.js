import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCbWeEGeMTfFAlW40qyKcZ1inl1sCNyEO4',
	authDomain: 'entertainment-web-app.firebaseapp.com',
	projectId: 'entertainment-web-app',
	storageBucket: 'entertainment-web-app.appspot.com',
	messagingSenderId: '280186656897',
	appId: '1:280186656897:web:ec85c61118a3a76f7d1580',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export function signInWithEmail(...props) {
	return signInWithEmailAndPassword(auth, ...props);
}

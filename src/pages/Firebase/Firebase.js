import * as firebase from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import FirebaseConfig from './FirebaseConfig';

firebase.initializeApp(FirebaseConfig);

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider(auth);

const checkLoggedIn = () => {
    return auth.currentUser != null;
}
export { checkLoggedIn, auth, googleAuthProvider };
import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from './key'


const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth()
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}
let db = firebase.database()
// providers.googleProvider.setCustomParameters({
//     hd: 'react-curso-chat.com',
// });
export { firebaseAppAuth, providers, db }

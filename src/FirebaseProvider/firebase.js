import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class Firebase {
    config = {
        apiKey: 'AIzaSyDfsW0mWVHvtVlUtDjgOwWqxcqe_8ES5eU',
        authDomain: 'twitter-sabanci.firebaseapp.com',
        projectId: 'twitter-sabanci',
        storageBucket: 'twitter-sabanci.appspot.com',
        messagingSenderId: '941785287971',
        appId: '1:941785287971:web:b88afb3ea1233944479096',
    };

    client = app;
    user = null;

    constructor() {
        app.initializeApp(this.config);

        app.firestore()
            .enablePersistence()
            .catch((err) => {
                if (err.code === 'failed-precondition') {
                    console.log('Multiple tabs are open, caching disabled');
                } else if (err.code === 'unimplemented') {
                    console.log('Browser does not support caching.');
                }
            });
    }

    async signIn() {
        await app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const provider = new app.auth.GoogleAuthProvider();
        try {
            await app.auth().signInWithPopup(provider);
        } catch (e) {
            console.log(e);
        }
    }

    signOut() {
        app.auth().signOut();
    }
}

export default Firebase;

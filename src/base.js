import Rebase from 're-base';
import Firebase from 'firebase';

const fbApp = Firebase.initializeApp({
    apiKey: "AIzaSyBVe8IDewOMXm_anLxHW9_jnqak4Mid5lg",
    authDomain: "coffee-radar.firebaseapp.com",
    databaseURL: "https://coffee-radar.firebaseio.com",
    storageBucket: "coffee-radar.appspot.com",
    messagingSenderId: "317973083340"
});

const base = Rebase.createClass(fbApp.database());

export default base;

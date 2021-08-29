import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDiVWXdqLZqXRA2RdJuFKVyW1htRDj4MXI",
    authDomain: "whatsapp-chat-dadf0.firebaseapp.com",
    projectId: "whatsapp-chat-dadf0",
    storageBucket: "whatsapp-chat-dadf0.appspot.com",
    messagingSenderId: "319862593462",
    appId: "1:319862593462:web:eee13dff3996714bc2d317",
    measurementId: "G-TS4L46QJPZ"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const auth = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
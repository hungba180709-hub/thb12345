// Cấu hình Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWB-ytYUMqyIQl1mfLnzBs-jnzwkdBQpI",
    authDomain: "thb123-ca349.firebaseapp.com",
    projectId: "thb123-ca349",
    storageBucket: "thb123-ca349.firebasestorage.app",
    messagingSenderId: "738004989291",
    appId: "1:738004989291:web:36d7e80aab8e7cd65e882e",
    measurementId: "G-4W5EXLYTK1"
};



// Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);
        console.log("Firebase initialized", app.name);

        // Khai báo Firestore
        const db = firebase.firestore();
         
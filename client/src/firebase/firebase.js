import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_n3tTep8jIQAMYo8Oi-gtX3O9uwpAm18",
    authDomain: "drupassemble.firebaseapp.com",
    databaseURL: "https://drupassemble.firebaseio.com",
    projectId: "drupassemble",
    storageBucket: "drupassemble.appspot.com",
    messagingSenderId: "149546555682",
    appId: "1:149546555682:web:09b304f252c7060092ed7b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export {firebase, db as default};

db.ref('projects').on('value', (snapshot) => {
    const projects = [];

    snapshot.forEach((childSnaphot) => {
        projects.push({
            id: childSnaphot.key,
            ...childSnaphot.val()
        });
    });
});
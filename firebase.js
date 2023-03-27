const firebaseConfig = {
  apiKey: "AIzaSyDE8tCMw13pVuMP69W3PP42TgwmyRLF8x0",
  authDomain: "gathering-garden.firebaseapp.com",
  projectId: "gathering-garden",
  storageBucket: "gathering-garden.appspot.com",
  messagingSenderId: "365792196710",
  appId: "1:365792196710:web:f522656c136b5dbd8315a7",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

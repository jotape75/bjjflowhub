import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1j3WuBpRwS1LreI32DFJAFu07LODvs7s",
  authDomain: "bjjflowhub-821fe.firebaseapp.com",
  projectId: "bjjflowhub-821fe",
  storageBucket: "bjjflowhub-821fe.firebasestorage.app",
  messagingSenderId: "218946505499",
  appId: "1:218946505499:web:7ea73d1c745a53cc42a1be"
};
const app = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);

// TODO: quando o domínio bjjflowhub.com.br estiver ativo, trocar para:
// export const academiaId = window.location.hostname.split('.')[0];
export const academiaId = 'demo';

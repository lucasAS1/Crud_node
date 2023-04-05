// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxcWBQiDSBqxpZV_IZ_qvmd2-J8MY6EAg",
  authDomain: "crudseila.firebaseapp.com",
  projectId: "crudseila",
  storageBucket: "crudseila.appspot.com",
  messagingSenderId: "1014125663426",
  appId: "1:1014125663426:web:15069c33658d895518975b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

function saveCadastro(cadastro){

}

function updateCadastro(cadastro){  

}

async function viewCadastro(id){


    
}

function deleteCadastro(cad){

}

exports.saveCadastro=saveCadastro;
exports.deleteCadastro=deleteCadastro;
exports.viewCadastro=viewCadastro;
exports.updateCadastro=updateCadastro;

const { initializeApp } = require('firebase/app');
const { getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    getDoc,
    getDocs,
    query,
    deleteDoc }
    = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyBx6jqQeNr_9QxnqbdSGFHsNQhEgHoyO2Y",
    authDomain: "freeze-day.firebaseapp.com",
    projectId: "freeze-day",
    storageBucket: "freeze-day.appspot.com",
    messagingSenderId: "919754769882",
    appId: "1:919754769882:web:99dd09f824b43ca2052ce3",
    measurementId: "G-EW1PB6KS2C"
};

const app = initializeApp(firebaseConfig);

const bancoDados = getFirestore();

async function criar(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(bancoDados, nomeTabela, id), dado);
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(bancoDados, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referenceEntity.id
        }
        return savedData;
    }
}

async function buscar(nomeTabela) {
    console.log("teste");
    const tableRef = collection(bancoDados, nomeTabela);

    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
    });
    return lista;
}

async function buscarPorId(nomeTabela, id) {
    const docRef = doc(bancoDados, nomeTabela, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Não encontrado!");
    }
}

async function deletar(nomeTabela, id) {
    const dado = await deleteDoc(doc(bancoDados, nomeTabela, id));
    return {
        message: `${id} deletado!`
    }
}

module.exports = {
    criar,
    buscar,
    buscarPorId,
    deletar
};
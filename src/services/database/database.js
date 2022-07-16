import { getFirestore, collection, doc, getDocs } from "firebase/firestore/lite";
import app from './firebase.js';

const firestore = getFirestore(app);

async function getCities(db) {
    const citiesCol = collection(db, 'articles');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data() );
    return cityList;
}

const fields = [];
getCities(firestore).then( cities => {
    cities.forEach(field => { fields.unshift(field)} )
})

export default fields;

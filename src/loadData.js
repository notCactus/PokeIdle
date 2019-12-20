import app from './base';
import {createPokemon} from './factory/pokemonFactory'

export default function loadData({setUsername, setCurrency, setItems, setLvl, setPc, setRoster, setStamina, setDataToLoaded}) {
    let currentUser = app.auth().currentUser;
    console.log(currentUser);
    if(currentUser){
        // Set username
        setUsername(currentUser.displayName);
        console.log(currentUser.displayName);
        let trainerDocRef = app.firestore().collection("trainer").doc(currentUser.uid);

        trainerDocRef.get()
        .then((doc) => {
            if(doc.exists) {
                let td = doc.data();
                // For testing
                console.log(doc.data());

                setCurrency(td.currency);
                setItems(td.items);
                setLvl(td.lvl);
                setPc(td.pcRoster.map(p => createPokemon(p)));
                setRoster(td.roster.map(p => createPokemon(p)));
                setStamina(td.stamina);
                setDataToLoaded(true);
            }else {
                console.log("The document doesn't exists.");
            }
        })
        .catch(console.err);
    }
}

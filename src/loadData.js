import app from './base';
import {createPokemon} from './factory/pokemonFactory'

export default function loadData(params) {
    let currentUser = app.auth().currentUser;
    if(currentUser){
        // Set username
        params.setUsername(currentUser.displayName);
        let trainerDocRef = app.firestore().collection("trainer").doc(currentUser.uid);
        let activeQuestsRef = app.firestore().collection("activeQuests").doc(currentUser.uid);
        let allQuestsRef = app.firestore().collection('quest');

        trainerDocRef.get()
        .then((doc) => {
            if(doc.exists) {
                let td = doc.data();
                params.setCurrency(td.currency);
                params.setItems(td.items);
                params.setLvl(td.lvl);
                params.setPc(td.pcRoster.map(p => createPokemon(p)));
                params.setRoster(td.roster.map(p => createPokemon(p)));
                params.setStamina(td.stamina);
                params.setDataToLoaded(true);
            }else {
                console.log("The document doesn't exists.");
            }
        })
        .catch(console.err);

        activeQuestsRef.get()
        .then((doc) => {
            if(doc.exists) {
                let td = doc.data();
                params.setActiveQuests(td.activeQuests);
            }
        })
        .catch(console.err);

        allQuestsRef.get()
        .then(snap =>{
          params.setAllQuests(snap.docs.map(v => v.data()))
        })
        .catch(console.err);
    }
}

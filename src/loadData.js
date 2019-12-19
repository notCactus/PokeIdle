import app from './base';

export default function loadData(setUsername, setCurrency, setItems, setLvl, setPc, setRoster, setStamina) {
    let currentUser = app.auth().currentUser;
    console.log(currentUser);
    if(currentUser){
        // Set username
        setUsername(currentUser.displayName);

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
                setPc(td.pc.map((p) => {
                    p['requiredXp'] = (lvl) => Math.pow(10,lvl);
                    p['maxHp'] = (lvl) => lvl*4;

                    return p;
                }));
                setRoster(td.roster.map((p) => {
                    p['requiredXp'] = (lvl) => Math.pow(10,lvl);
                    p['maxHp'] = (lvl) => lvl*4;

                    return p;
                }));
                setStamina(td.stamina);

            }else {
                console.log("The document doesn't exists.");
            }
        })
        .catch(console.err);
    }
}
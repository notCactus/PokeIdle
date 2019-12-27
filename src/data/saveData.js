import app from '../base';
import createTrainerSaveFile from '../factory/trainerFactory';

export default function saveData(params){
  app.firestore().collection('trainer').doc(app.auth().currentUser.uid).set(createTrainerSaveFile(params.trainer()))
  .catch(console.log);
  app.firestore().collection('activeQuests').doc(app.auth().currentUser.uid).set({activeQuests: params.activeQuests()})
  .catch(console.log);
}

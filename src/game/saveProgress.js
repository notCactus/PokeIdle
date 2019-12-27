import saveData from '../data/saveData'

let counter = 0;

export default function saveProgress(params){
  counter++;
  if(counter >= params.save){
    saveData(params)
    counter = 0;
  }
}

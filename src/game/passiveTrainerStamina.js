const MINUTES = 60;
const STAMINA_TIMEOUT = 3*MINUTES;
let time = 0;

export default function passiveTrainerStamina(addStamina){
  time++;
  if(time >= STAMINA_TIMEOUT){
    time = 0;
    addStamina();
  }
}

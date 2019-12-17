const MINUTES = 1;//3600;
const STAMINA_TIMEOUT = 10*MINUTES;
let time = 0;

export default function passiveTrainerStamina(addStamina){
  time++;
  if(time >= STAMINA_TIMEOUT){
    time = 0;
    addStamina();
  }
}

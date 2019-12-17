const MINUTES = 60;
const HEALTH_TIMEOUT = 10*MINUTES;
let time = 0;

export default function passivePcRosterHealth(addHealth){
  time++;
  if(time >= HEALTH_TIMEOUT){
    time = 0;
    addHealth();
  }
}

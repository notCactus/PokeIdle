export default function(addXp, xp, maxXp, addLevel){
  addXp();
  //console.log(`Current: ${xp()}, requiered: ${maxXp()}`);
  if(xp() >= maxXp())
    addLevel();
}

/***CONTAINS ALL CODE FOR THE GAME****/
const startGame = (store) => {
  const gameLoop = setInterval(() => game(store), UPDATE_TIME);
  return gameLoop;
}
export default startGame;

const UPDATE_TIME = 1000;
const XP_GAIN_PER_UPDATE = 1;

const game = (store) => {
  passiveTrainerXp(
    () => store.dispatch({type: 'ADD_XP', xp: XP_GAIN_PER_UPDATE}),
    () => store.getState().trainer.xp,
    () => store.getState().trainer.maxXp,
    () => store.dispatch({type: 'ADD_LVL', lvl: 1})
  );
}

const passiveTrainerXp = (addXp, xp, maxXp, addLevel) => {
  addXp();
  //console.log(`Current: ${xp()}, requiered: ${maxXp()}`);
  if(xp() >= maxXp())
    addLevel();
}

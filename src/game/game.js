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
  passivePokemonXp(
    () => store.getState().trainer.roster,
    (p) => store.dispatch({type: 'SET_ROSTER', pokemon: p})
  );
}

const passiveTrainerXp = (addXp, xp, maxXp, addLevel) => {
  addXp();
  //console.log(`Current: ${xp()}, requiered: ${maxXp()}`);
  if(xp() >= maxXp())
    addLevel();
}
const passivePokemonXp = (pokemon, setRoster) => {
  setRoster(
    pokemon().map(p => {
      p.xp += XP_GAIN_PER_UPDATE;
      if(p.xp > p.requiredXp(p.lvl)){
        p.xp = 1;
        p.lvl += 1;
      }
      return p;
    })
  );
}

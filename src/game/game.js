/***CONTAINS ALL CODE FOR THE GAME****/
const startGame = (store) => {
  const gameLoop = setInterval(() => game(store), UPDATE_TIME);
  return gameLoop;
}
export default startGame;

const UPDATE_TIME = 1000;
const TRAINER_XP_GAIN_PER_UPDATE = 1;
const POKEMON_XP_GAIN_PER_UPDATE = 2;

let questWithRoster = {};

const game = (store) => {
  passiveTrainerXp(
    () => store.dispatch({type: 'ADD_XP', xp: TRAINER_XP_GAIN_PER_UPDATE}),
    () => store.getState().trainer.xp,
    () => store.getState().trainer.maxXp,
    () => store.dispatch({type: 'ADD_LVL', lvl: 1})
  );
  passivePokemonXp(
    (x) => store.dispatch({type: 'ADD_XP_TO_ROSTER', xp: x}),
  );
  quest(
    () => store.getState().quest.activeQuests,
    () => store.getState().trainer.roster,
    () => store.getState().quest.allQuests,
    (name) => store.dispatch({type: 'RETURN_POKEMON_FROM_QUEST', quest: name}),
    (name) => store.dispatch({type: 'REMOVE_ACTIVE_QUEST', quest: name}),
    () => store.dispatch({type: 'SET_AVAILIBLE_QUESTS', lvl: store.getState().trainer.lvl}),
    (name, x) => store.dispatch({type: 'ADD_XP_TO_ROSTER_FROM_QUEST', quest: name, xp: x}),
  )
}

const passiveTrainerXp = (addXp, xp, maxXp, addLevel) => {
  addXp();
  //console.log(`Current: ${xp()}, requiered: ${maxXp()}`);
  if(xp() >= maxXp())
    addLevel();
}
const passivePokemonXp = (addXp) => {
  addXp(POKEMON_XP_GAIN_PER_UPDATE);
}

const quest = (activeQuests, roster,
   allQuests, returnPokemon,
    removeFromActive, updateQuestAvailiblity,
    rosterReward) => {
  //Checks if quest set up is done
  const toSet = activeQuests().filter(quest =>
    questWithRoster[quest] === undefined
  );

  toSet.forEach(quest => {
    const questDetails =
    allQuests().find(q => q.name === quest)
    questWithRoster[quest] = "set";
    setTimeout(() => {
      rosterReward(quest,
        questDetails.basePokemonXp
      );
      returnPokemon(quest);
      removeFromActive(quest);
      updateQuestAvailiblity();
      delete questWithRoster[quest];
    },questDetails.time*1000)
  });

}

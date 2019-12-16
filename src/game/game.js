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
    () => store.getState().trainer.roster,
    (p) => store.dispatch({type: 'SET_ROSTER', pokemon: p})
  );
  quest(
    () => store.getState().quest.activeQuests,
    () => store.getState().trainer.roster,
    () => store.getState().quest.allQuests,
    (pokemon) => store.dispatch({type: 'RETURN_POKEMON_FROM_QUEST', ids: pokemon}),
    (name) => store.dispatch({type: 'REMOVE_ACTIVE_QUEST', quest: name}),
  )
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
      p.xp += POKEMON_XP_GAIN_PER_UPDATE;
      if(p.xp > p.requiredXp(p.lvl)){
        p.xp = 1;
        p.lvl += 1;
      }
      return p;
    })
  );
}

const quest = (activeQuests, roster, allQuests, returnPokemon, removeFromActive) => {
  //Checks if quest set up is done
  const toSet = activeQuests().filter(quest =>
    questWithRoster[quest] === undefined
  );

  toSet.forEach(quest => {
    questWithRoster[quest] =
    roster()
    .filter(pokemon =>
      pokemon.questId === quest
    )
    .map(pokemon => pokemon.id);
    setTimeout(() => {
      returnPokemon(questWithRoster[quest]);
      removeFromActive(quest);
      delete questWithRoster[quest];
    },allQuests().find(q => q.name === quest).time*1000)
  });

}

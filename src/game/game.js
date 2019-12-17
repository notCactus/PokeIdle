/***CONTAINS ALL CODE FOR THE GAME****/
import quest from './quest';
import passiveTrainerXp from './passiveTrainerXp';
import passivePokemonXp from './passivePokemonXp';

const startGame = (store) => {
  const gameLoop = setInterval(() => game(store), UPDATE_TIME);
  return gameLoop;
}
export default startGame;

const UPDATE_TIME = 1000;
const TRAINER_XP_GAIN_PER_UPDATE = 1;
const POKEMON_XP_GAIN_PER_UPDATE = 2;

const game = (store) => {
  passiveTrainerXp(
    () => store.dispatch({type: 'ADD_XP', xp: TRAINER_XP_GAIN_PER_UPDATE}),
    () => store.getState().trainer.xp,
    () => store.getState().trainer.maxXp,
    () => store.dispatch({type: 'ADD_LVL', lvl: 1})
  );
  passivePokemonXp(
    () => store.dispatch({type: 'ADD_XP_TO_ROSTER', xp: POKEMON_XP_GAIN_PER_UPDATE}),
  );
  quest(
    () => store.getState().quest.activeQuests,
    () => store.getState().trainer.roster,
    () => store.getState().quest.allQuests,
    (name) => store.dispatch({type: 'RETURN_POKEMON_FROM_QUEST', quest: name}),
    (name) => store.dispatch({type: 'REMOVE_ACTIVE_QUEST', quest: name}),
    () => store.dispatch({type: 'SET_AVAILIBLE_QUESTS', lvl: store.getState().trainer.lvl}),
    (name, x) => store.dispatch({type: 'ADD_XP_TO_ROSTER_FROM_QUEST', quest: name, xp: x}),
    (x, p) => {
      store.dispatch({type: 'ADD_XP', xp: x,});
      // TODO: store.dispatch({type: 'ADD_CURRENCY', currency: p,};
    }
  )
}

/***CONTAINS ALL CODE FOR THE GAME****/
import quest from './quest';
import passiveTrainerXp from './passiveTrainerXp';
import passivePokemonXp from './passivePokemonXp';
import passiveTrainerStamina from './passiveTrainerStamina';
import passivePcRosterHealth from './passivePcRosterHealth';
import loadData from '../loadData';

const startGame = (store) => {
  const gameLoop = setInterval(() => {if(store.getState().session.signedIn) game(store);}, UPDATE_TIME);
  return gameLoop;
}

export default startGame;

const UPDATE_TIME = 10000000;
const TRAINER_XP_GAIN_PER_UPDATE = 1;
const POKEMON_XP_GAIN_PER_UPDATE = 2;
const STAMINA_REGENERATION = 1;
const HEALTH_REGENERATION = 1;

const game = (store) => {
  if(store.getState().session.loadedData){
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
      (x, c) => {
        store.dispatch({type: 'ADD_XP', xp: x,});
        // TODO: store.dispatch({type: 'ADD_CURRENCY', currency: c,};
      },
      (s) => store.dispatch({type: 'REMOVE_STAMINA', stamina: s}),
      (q, d) => store.dispatch({type: 'DAMAGE_POKEMON_FROM_QUEST', quest: q, dmg: d}),
    );
    passiveTrainerStamina(
      () => store.dispatch({type: 'ADD_STAMINA', stamina: STAMINA_REGENERATION}),
    );
    passivePcRosterHealth(
      () => store.dispatch({type: 'PASSIVE_PC_HEALTH_REGEN', hp: HEALTH_REGENERATION}),
    );
  } else {
    loadData(
      {
        setUsername: (n) => store.dispatch({type:'SET_USERNAME',username: n,}),
        setCurrency: (amount) => store.dispatch({type:'SET_CURRENCY',currency: amount,}),
        setItems: (items) => store.dispatch({type:'SET_ITEMS',item: items,}),
        setLvl: (amount) => store.dispatch({type:'SET_LVL',lvl: amount,}),
        setPc: (pokemon) => store.dispatch({type:'SET_PC', pokemon: pokemon,}),
        setRoster: (pokemon) => store.dispatch({type:'SET_ROSTER',pokemon: pokemon,}),
        setStamina: (stamina) => store.dispatch({type:'SET_STAMINA',stamina: stamina,}),
        setDataToLoaded: (loaded) => store.dispatch({type:'SET_DATA_LOADED', loaded: loaded})
      }
    )
  }
}

/***CONTAINS ALL CODE FOR THE GAME****/
import quest from './quest';
import passiveTrainerXp from './passiveTrainerXp';
import passivePokemonXp from './passivePokemonXp';
import passiveTrainerStamina from './passiveTrainerStamina';
import passivePcRosterHealth from './passivePcRosterHealth';
import saveProgress from './saveProgress'
import loadData from '../loadData';

const startGame = (store) => {
  const gameLoop = setInterval(() => {
    if(store.getState().session.signedIn)
      game(store);
    }, UPDATE_TIME);
  return gameLoop;
}

let loadTry = 0;

export default startGame;

const UPDATE_TIME = 1000;
const TRAINER_XP_GAIN_PER_UPDATE = 1;
const POKEMON_XP_GAIN_PER_UPDATE = 2;
const STAMINA_REGENERATION = 1;
const HEALTH_REGENERATION = 1;
const SAVE_EVERY = 5;

// Game loop, all game logic is found here.
const game = (store) => {
  if(store.getState().session.loadedData){
    saveProgress({
      trainer: () => store.getState().trainer,
      activeQuests: () => store.getState().quest.activeQuests,
      save: SAVE_EVERY,
    });

    passiveTrainerXp(
      () => store.dispatch({type: 'ADD_XP', xp: TRAINER_XP_GAIN_PER_UPDATE}),
      () => store.getState().trainer.xp,
      () => store.getState().trainer.maxXp,
      () => store.dispatch({type: 'ADD_LVL', lvl: 1})
    );
    passivePokemonXp(
      () => store.dispatch({type: 'ADD_XP_TO_ROSTER', xp: POKEMON_XP_GAIN_PER_UPDATE}),
    );
    quest({
      activeQuests: () => store.getState().quest.activeQuests,
      roster: () => store.getState().trainer.roster,
      allQuests: () => store.getState().quest.allQuests,
      returnPokemon: (name) => store.dispatch({type: 'RETURN_POKEMON_FROM_QUEST', quest: name}),
      removeFromActive: (name) => store.dispatch({type: 'REMOVE_ACTIVE_QUEST', quest: name}),
      updateQuestAvailiblity: () => store.dispatch({type: 'SET_AVAILIBLE_QUESTS', lvl: store.getState().trainer.lvl}),
      rosterReward: (name, x) => store.dispatch({type: 'ADD_XP_TO_ROSTER_FROM_QUEST', quest: name, xp: x}),
      trainerReward: (x, c) => {
        store.dispatch({type: 'ADD_XP', xp: x,});
        store.dispatch({type: 'ADD_CURRENCY', currency: c,});
      },
      trainerStaminaCost: (s) => store.dispatch({type: 'REMOVE_STAMINA', stamina: s}),
      dmgPokemon: (q, d) => store.dispatch({type: 'DAMAGE_POKEMON_FROM_QUEST', quest: q, dmg: d}),
      currentStamina: () => store.getState().trainer.stamina,
      updateQuestTimes: () => store.dispatch({type: 'ADD_TIME_TO_ACTIVE_QUESTS', time: 1}),
    });
    passiveTrainerStamina(
      () => store.dispatch({type: 'ADD_STAMINA', stamina: STAMINA_REGENERATION}),
    );
    passivePcRosterHealth(
      () => store.dispatch({type: 'PASSIVE_PC_HEALTH_REGEN', hp: HEALTH_REGENERATION}),
    );
  } else if(loadTry < 5){
    loadTry++;
    loadData(
      {
        setUsername: (n) => store.dispatch({type:'SET_USERNAME',username: n,}),
        setCurrency: (amount) => store.dispatch({type:'SET_CURRENCY',currency: amount,}),
        setItems: (items) => store.dispatch({type:'SET_ITEMS',item: items,}),
        setActiveQuests: (q) => store.dispatch({type: 'SET_ACTIVE_QUESTS', quests: q,}),
        setLvl: (amount) => store.dispatch({type:'SET_LVL',lvl: amount,}),
        setPc: (pokemon) => store.dispatch({type:'SET_PC', pokemon: pokemon,}),
        setRoster: (pokemon) => store.dispatch({type:'SET_ROSTER',pokemon: pokemon,}),
        setStamina: (stamina) => store.dispatch({type:'SET_STAMINA',stamina: stamina,}),
        setDataToLoaded: (loaded) => store.dispatch({type:'SET_DATA_LOADED', loaded: loaded}),
        setAllQuests: (quests) => store.dispatch({type: 'SET_ALL_QUESTS',quests: quests,}),
        setXp: (xp) => store.dispatch({type: 'SET_XP', xp: xp}),
      }
    );
    store.dispatch({type: 'SET_AVAILIBLE_QUESTS'});
  }
}

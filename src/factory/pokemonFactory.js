export function createPokemon({id, lvl = 1, hp = 4, questId = '', xp = 0}){
  return {
    id: id,
    hp: hp,
    lvl: lvl,
    questId: questId,
    xp: xp,
    requiredXp: (lvl) => Math.pow(10,lvl),
    maxHp: (lvl) => lvl*4,
  }
}

export function createPokemonRosterSaveFile(roster){
  return roster.map(pokemon => createPokemonSaveFile);
}

export function createPokemonSaveFile({id, lvl, hp, questId, xp,}){
  return {
    id: id,
    lvl: lvl,
    hp: hp,
    questId: questId,
    xp: xp,
  }
}

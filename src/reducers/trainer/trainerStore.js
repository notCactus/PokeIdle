import currency from './currency';
import items from './items';
import lvl from './lvl';
import pcRoster from './pcRoster';
import roster from './roster';
import stamina from './stamina';
import maxStamina from './maxStamina';
import xp from './xp';
import maxXp from './maxXp';

export const trainer = (state = {}, action) => {
  if(action.type === 'RESET_TRAINER')
    return {
      currency: 500,
      items: [],
      lvl: 1,
      pcRoster: [],
      roster: [],
      stamina: 11,
      maxStamina: maxStamina(state.lvl, action),
      xp: 0,
      maxXp: maxXp(state.lvl, action),
    };
  return {
      currency: currency(state.currency, action),
      items: items(state.items, action),
      lvl: lvl(state.lvl, action),
      pcRoster: pcRoster(state.pcRoster, action),
      roster: roster(state.roster, action),
      stamina: stamina(state.stamina, {...action, lvl: state.lvl, maxStamina: maxStamina}),
      maxStamina: maxStamina(state.lvl, action),
      xp: xp(state.xp, action),
      maxXp: maxXp(state.lvl, action),
  };
}

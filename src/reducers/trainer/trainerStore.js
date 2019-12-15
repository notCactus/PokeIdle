import currency from './currency';
import items from './items';
import lvl from './lvl';
import pcRoster from './pcRoster';
import roster from './roster';
import stamina from './stamina';
import xp from './xp';
import maxXp from './maxXp';

export const trainer = (state = {}, action) => {
  return {
      currency: currency(state.currency, action),
      items: items(state.items, action),
      lvl: lvl(state.lvl, action),
      pcRoster: pcRoster(state.pcRoster, action),
      roster: roster(state.roster, action),
      stamina: stamina(state.stamina, action),
      xp: xp(state.xp, action),
      maxXp: maxXp(state.maxXp, action),
  };
}

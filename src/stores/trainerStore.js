import { createStore } from 'redux';

import currency from '../reducers/trainer/currency';
import items from '../reducers/trainer/items';
import lvl from '../reducers/trainer/lvl';
import pcRoster from '../reducers/trainer/pcRoster';
import roster from '../reducers/trainer/roster';
import stamina from '../reducers/trainer/stamina';
import xp from '../reducers/trainer/xp';

function reducer(state =
  {
    currency: 0,
    items: [],
    lvl: 1,
    pcRoster: [],
    roster: [],
    stamina: 11,
    xp: 0,
  },
  action) {
    return {
        currency: currency(state.currency, action),
        items: items(state.items, action),
        lvl: lvl(state.lvl, action),
        pcRoster: pcRoster(state.pcRoster, action),
        roster: roster(state.roster, action),
        stamina: stamina(state.stamina, action),
        xp: xp(state.xp, action),
    };
  }

const trainerStore = createStore(reducer);

export default trainerStore;

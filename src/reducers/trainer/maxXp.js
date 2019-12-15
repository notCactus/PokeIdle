export default function maxXp(state = 1, action){
  if(action.type === "GET_MAX_PLAYER_XP"){
    if(action.lvl > 0) return Math.pow(10, action.lvl);
  } else return Math.pow(10, state);
}

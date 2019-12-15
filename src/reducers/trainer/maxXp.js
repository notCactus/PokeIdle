export default function maxXp(state = 10, action){
  if(action.type = "GET_MAX_TRAINER_XP"){
    if(action.lvl > 0) return Math.pow(10, action.lvl);
  } else return state;
}

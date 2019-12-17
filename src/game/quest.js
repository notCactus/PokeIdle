let questWithRoster = {};
let questWithDmgRoster = {};

const DMG_CALC_PER_SEC = 2;

export default function quest(activeQuests, roster,
   allQuests, returnPokemon,
    removeFromActive, updateQuestAvailiblity,
    rosterReward, trainerReward,
    trainerStaminaCost, dmgPokemon){
  //Checks if quest set up is done
  const toSet = activeQuests().filter(quest =>
    questWithRoster[quest] === undefined
  );

  toSet.forEach(quest => {
    const questDetails =
    allQuests().find(q => q.name === quest)
    questWithRoster[quest] = roster().map((pokemon) => {if(pokemon.questId === quest) return pokemon;});
    setTimeout(() => {
      trainerReward(questDetails.baseTrainerXp);
      trainerStaminaCost(questDetails.staminaCost);
      dmgPokemon(quest, generateDmg(quest, questDetails.time))
      rosterReward(quest,
        questDetails.basePokemonXp
      );
      returnPokemon(quest);
      removeFromActive(quest);
      updateQuestAvailiblity();
      delete questWithRoster[quest];
    },questDetails.time*1000)
  });
}


const generateDmg = (quest, time)=> {
  questWithDmgRoster[quest] = questWithRoster[quest].map(k => 0);
  while(time > 0){
    questWithDmgRoster[quest] =
    questWithDmgRoster[quest].map(d => {
      let t =Math.floor(Math.random() * 10);
      if(t < 4)
        return d + 1;
      return d;
    });
    time -= DMG_CALC_PER_SEC;
  }
  let dmg = [...questWithDmgRoster[quest]]
  delete questWithDmgRoster[quest];
  return [...dmg];
}

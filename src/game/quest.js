let questWithRoster = {};
let questWithDmgRoster = {};

const DMG_CALC_PER_SEC = 2;

export default function quest(params){
  //Checks if quest set up is done
  const toSet = params.activeQuests().filter(quest =>
    questWithRoster[quest] === undefined
  );

  toSet.forEach(quest => {
    const questDetails =
    params.allQuests().find(q => q.name === quest);

    questWithRoster[quest] =
    params.roster().map((pokemon) => {if(pokemon.questId === quest) return pokemon;});

    const before = params.currentStamina();
    params.trainerStaminaCost(questDetails.staminaCost);

    if(before > params.currentStamina()){
      setTimeout(() => {
        params.trainerReward(questDetails.baseTrainerXp);
        params.dmgPokemon(quest, generateDmg(quest, questDetails.time))
        params.rosterReward(quest,
          questDetails.basePokemonXp
        );
        params.returnPokemon(quest);
        params.removeFromActive(quest);
        params.updateQuestAvailiblity();
        delete questWithRoster[quest];
      },questDetails.time*1000)
    }
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

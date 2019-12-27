let activeQuests = {};
let questWithDmgRoster = {};

const DMG_CALC_PER_SEC = 2;

export default function quest(params){
  //Checks if quest set up is done
  const toSet = params.activeQuests().filter(quest =>
    activeQuests[quest.name] === undefined
  );

  toSet.forEach(quest => {
    const questDetails =
    params.allQuests().find(q => q.name === quest.name);

    activeQuests[quest.name] = quest;

    const before = params.currentStamina();
    params.trainerStaminaCost(questDetails.staminaCost);

    if(before > params.currentStamina()){
      setTimeout(() => {
        params.trainerReward(questDetails.baseTrainerXp);
        params.dmgPokemon(quest, generateDmg(quest.name, questDetails.time, params.roster()))
        params.rosterReward(quest.name,
          questDetails.basePokemonXp
        );
        params.returnPokemon(quest.name);
        params.removeFromActive(quest.name);
        params.updateQuestAvailiblity();
        delete activeQuests[quest.name];
      }, questDetails.time*1000)
    }
  });
  params.updateQuestTimes();
}


const generateDmg = (quest, time, roster)=> {
  questWithDmgRoster[quest] = roster
  .filter(p => p.questId === quest).map(k => 0);
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

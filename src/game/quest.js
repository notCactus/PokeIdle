let activeQuests = {};
let questWithDmgRoster = {};

const DMG_CALC_PER_SEC = 2;

export default function quest(params){
  //Checks if quest set up is done
  let toSet = [];
  if(params.allQuests().length > 0)
    toSet = params.activeQuests().filter(quest =>
      activeQuests[quest.name] === undefined
    );

  toSet.forEach(quest => {
    const questDetails =
    params.allQuests().find(q => q.name === quest.name);

    activeQuests[quest.name] = quest;
    if(quest.cd === 0)
      params.trainerStaminaCost(questDetails.staminaCost);
    setTimeout(() => {
      params.dmgPokemon(quest.name, generateDmg(questDetails, params.roster()))
      params.trainerReward(questDetails.baseTrainerXp,
         questDetails.baseTrainerCoins);
      params.rosterReward(quest.name,
        questDetails.basePokemonXp
      );
      params.returnPokemon(quest.name);
      params.removeFromActive(quest.name);
      params.updateQuestAvailiblity();
      delete activeQuests[quest.name];
    }, (questDetails.time - quest.cd)*1000)
  });
  params.updateQuestTimes();
}

const freeQuest = ({})


const generateDmg = (quest, roster)=> {
  let time = quest.time;
  questWithDmgRoster[quest.name] = roster
  .filter(p => p.questId === quest.name).map(k => 0);
  while(time > 0){
    questWithDmgRoster[quest.name] =
    questWithDmgRoster[quest.name].map(d => {
      let t = getRandomInt(100);
      if(t <= quest.dmgRisq)
        return d + getRandomInt(quest.maxDmg - quest.minDmg) + quest.minDmg;;
      return d;
    });
    time -= quest.dmgPosibilityEvery;
  }
  let dmg = [...questWithDmgRoster[quest.name]]
  delete questWithDmgRoster[quest.name];
  return [...dmg];
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

let questWithRoster = {};

export default function quest(activeQuests, roster,
   allQuests, returnPokemon,
    removeFromActive, updateQuestAvailiblity,
    rosterReward, trainerReward){
  //Checks if quest set up is done
  const toSet = activeQuests().filter(quest =>
    questWithRoster[quest] === undefined
  );

  toSet.forEach(quest => {
    const questDetails =
    allQuests().find(q => q.name === quest)
    questWithRoster[quest] = "set";
    setTimeout(() => {
      trainerReward(questDetails.baseTrainerXp);
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

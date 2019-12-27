export default function createActiveQuest(quest){
  return {
    name: quest.name,
    time: quest.time,
    cd: 0,
  }
}

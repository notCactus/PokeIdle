export default function pokemonQuestId(state=null, action){ // null means that the pokemon is not on a quest.
    if (action.type === 'SET_POKEMON_QUEST_ID') {
        state = action.questId;
        return state;

    } else if (action.type === 'REMOVE_POKEMON_FROM_QUEST'){
        // Sets the quest id to null to show that the pokemon isn't on a quest.
        state = null;
        return state;
    }else {
        return state;
    }
}
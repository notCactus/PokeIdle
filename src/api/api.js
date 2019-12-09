const getFromPokeapi = async (category, id) => {
    return fetch(`https://pokeapi.co/api/v2/${category}/${id}`)
    .then((response) => {
        if(response.ok)
           return response;
        throw Error(response.statusText);
    })
    .then(r => r.json())
    .catch(console.error);
}

function getPokemon(id) { 
    return getFromPokeapi('pokemon', id);
}

function getItem(id) { 
    return getFromPokeapi('item', id);
}

function getEvolution(id) { 
    return getFromPokeapi('evolution-chain', id);
}

export default {getPokemon, getItem, getEvolution}
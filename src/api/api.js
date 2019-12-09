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

export function getPokemon(id) { 
    return getFromPokeapi('pokemon', id);
}

export function getItem(id) { 
    return getFromPokeapi('item', id);
}

export function getEvolution(id) { 
    return getFromPokeapi('evolution-chain', id);
}

export default {getPokemon, getItem, getEvolution};
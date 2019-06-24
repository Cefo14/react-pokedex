import fetch from 'cross-fetch';

const API_URL = 'https://pokeapi.co/api/v2';
const config = {
    cache: 'force-cache',
};

/**
 * 
 * @param {String} url
 * @returns {Object|NullLiteral}
 * fetch a general url
 */
const _fetchUrl = async (url) => {
    try {
        const response = await fetch(url, config);
        const json = await response.json();
        return json;
    }
    catch { 
        return null;
    }
};

/**
 * 
 * @param {String|Number} id 
 * @returns {Object|NullLiteral}
 * fetch a pokemon by id
 */
export const fetchPokemon = async (id) => {
    try {
        const url = `${API_URL}/pokemon/${id}`;
        const response = await fetch(url, config);
        const json = await response.json();
        return json;
    }
    catch {
        return null;
    }
};

/**
 * 
 * @param {Object} description
 * @returns {Object|NullLiteral}
 * fetch a descrption
 */
export const fetchDescription = async (description) => {
    try {
        const fetchMoves = await _fetchUrl(description.url)
        return fetchMoves;
    }
    catch { 
        return null;
    }
};

/**
 * 
 * @param {Array} moves
 * @returns {Array|NullLiteral}
 * fetch all moves in parallel
 */
export const fetchAllMoves = async (moves) => {
    try {
        const fetchMoves = await Promise.all(moves.map(({ move }) => _fetchUrl(move.url)));
        return fetchMoves;
    }
    catch { 
        return null;
    }
};

/**
 * 
 * @param {Object} species
 * @returns {Array|NullLiteral}
 * fetch and format all evolutions
 */
export const fetchAllEvolutions = async (species) => {
    try {
        const speciesUrl = species.url;
        const speciesResponse = await fetch(speciesUrl, config);
        const speciesJson = await speciesResponse.json();

        const evolutionChainUrl = speciesJson.evolution_chain.url;
        const evolutionChainResponse = await fetch(evolutionChainUrl, config);
        const evolutionChainJson = await evolutionChainResponse.json();

        let evolveTo = evolutionChainJson.chain.evolves_to;
        const evolvesFetch = [evolutionChainJson.chain.species.name];
        while(evolveTo.length > 0) {
            const evolve = evolveTo[0];
            evolvesFetch.push(evolve.species.name);
            evolveTo = evolve.evolves_to;
        }

        const evolvesRespose = await Promise.all(evolvesFetch.map(id => fetchPokemon(id)));
        const evolves = evolvesRespose.map((pokemon) => {
            const { id, name, sprites } = pokemon;
            const { front_default } = sprites;
            return {
                id,
                name,
                image: front_default,
            };
        });

        return evolves;
    }

    catch {
        return null;
    }
};
